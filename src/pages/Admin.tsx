import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, updateDoc, doc, Timestamp } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { LogOut, Copy, Check, Mail, Clock } from 'lucide-react';

interface Message {
    id: string;
    name: string;
    email: string;
    purpose: string; // or message content if purpose mapped differently
    message: string;
    status: 'new' | 'read' | 'replied';
    createdAt: Timestamp;
}

const Admin = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');
            } else {
                setLoading(false);
            }
        });

        return () => unsubscribeAuth();
    }, [navigate]);

    useEffect(() => {
        if (loading) return;

        const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
        const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Message[];
            setMessages(msgs);
        });

        return () => unsubscribeSnapshot();
    }, [loading]);

    const handleCopyEmail = (email: string) => {
        navigator.clipboard.writeText(email);
        toast.success('Email copied to clipboard');
    };

    const handleMarkAsRead = async (id: string) => {
        try {
            await updateDoc(doc(db, 'messages', id), {
                status: 'read'
            });
            toast.success('Marked as read');
        } catch (error) {
            console.error(error);
            toast.error('Error updating status');
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };

    const formatDate = (timestamp: Timestamp) => {
        if (!timestamp) return '';
        return new Date(timestamp.seconds * 1000).toLocaleString();
    };

    if (loading) return <div className="min-h-screen grid place-items-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-background p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-10">
                    <h1 className="font-display text-3xl font-bold">Inbox</h1>
                    <button onClick={handleLogout} className="btn-secondary flex items-center gap-2">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </header>

                <div className="grid gap-6">
                    {messages.length === 0 ? (
                        <p className="text-muted-foreground text-center py-10">No messages yet.</p>
                    ) : (
                        messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`glass-card p-6 border-l-4 ${msg.status === 'new' ? 'border-l-primary' : 'border-l-transparent'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-secondary rounded-full h-fit">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{msg.name}</h3>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <span>{msg.email}</span>
                                                <button
                                                    onClick={() => handleCopyEmail(msg.email)}
                                                    className="hover:text-primary transition-colors"
                                                    title="Copy Email"
                                                >
                                                    <Copy className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={`text-xs px-2 py-1 rounded-full uppercase tracking-wider font-medium ${msg.status === 'new' ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                                            }`}>
                                            {msg.status}
                                        </span>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {formatDate(msg.createdAt)}
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-secondary/30 p-4 rounded-lg mb-4">
                                    <p className="text-foreground/90 whitespace-pre-wrap">{msg.message}</p>
                                </div>

                                <div className="flex justify-end gap-3">
                                    <a
                                        href={`mailto:${msg.email}?subject=Re: ${msg.purpose || 'Portfolio Inquiry'}`}
                                        className="btn-secondary text-sm flex items-center gap-2"
                                    >
                                        Reply via Gmail
                                    </a>
                                    {msg.status === 'new' && (
                                        <button
                                            onClick={() => handleMarkAsRead(msg.id)}
                                            className="btn-primary text-sm flex items-center gap-2"
                                        >
                                            <Check className="w-4 h-4" />
                                            Mark as Read
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
