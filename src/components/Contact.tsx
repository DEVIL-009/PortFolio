import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Instagram, Send, Check, Gamepad2 } from 'lucide-react';
import { useState } from 'react';
import CursorParticles from './CursorParticles';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send via EmailJS (Primary Notification Method)
      await emailjs.send(
        'service_t2chb2a',
        'template_7l5yorn',
        {
          from_name: formData.name, // Existing key
          user_name: formData.name, // Added common key
          name: formData.name,      // Added common key
          from_email: formData.email,
          user_email: formData.email, // Added common key
          email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'devanandan170@gmail.com',
        },
        'D3HJLTYaG-DRN6-0O' // Your new EmailJS Public Key
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!");

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactItems = [
    { icon: Mail, title: 'Email', value: 'devanandan170@gmail.com', href: 'mailto:devanandan170@gmail.com' },
    { icon: MapPin, title: 'Location', value: 'Kerala, India', href: null },
    { icon: Github, title: 'GitHub', value: 'github.com/DEVIL-009', href: 'https://github.com/DEVIL-009' },
    { icon: Instagram, title: 'Instagram', value: 'instagram.com/deva_nandan_09', href: 'https://www.instagram.com/deva_nandan_09/' },
    { icon: Linkedin, title: 'LinkedIn', value: 'linkedin.com/in/deva-nandan-s', href: 'https://www.linkedin.com/in/deva-nandan-s-72038438b/' },
    { icon: Gamepad2, title: 'Discord', value: 'deva_nandan_09', href: '#', action: 'copy' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient background with CursorParticles */}
      <div className="absolute inset-0 overflow-hidden">
        <CursorParticles />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Let's Build Something <span className="text-primary">Impactful</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href || '#'}
                  onClick={(e) => {
                    if (item.action === 'copy') {
                      e.preventDefault();
                      navigator.clipboard.writeText(item.value);
                      toast.success(`${item.title} username copied!`);
                    } else if (!item.href) {
                      e.preventDefault();
                    }
                  }}
                  target={item.action === 'copy' || !item.href ? '_self' : '_blank'}
                  rel={item.action === 'copy' || !item.href ? '' : 'noopener noreferrer'}
                  className={`glass-card p-5 flex items-center gap-4 hover-lift group ${item.href || item.action === 'copy' ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="p-3 rounded-xl bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors duration-300 break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="form-input resize-none"
                    required
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <motion.button
                  type="submit"
                  className={`btn-primary btn-submit w-full flex items-center justify-center gap-2 ${isSubmitted ? 'bg-green-500/80' : ''
                    }`}
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.99 }}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Message Sent
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;