
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import '../index.css'


const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="section-title mx-auto mb-4 after:left-1/2 after:-translate-x-1/2">
          <span className="text-portfolio-accent">04.</span> Get In Touch
        </h2>
        <p className="text-portfolio-secondary mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-portfolio-lightest">Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-portfolio-navy border-portfolio-secondary focus:border-portfolio-accent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-portfolio-lightest">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-portfolio-navy border-portfolio-secondary focus:border-portfolio-accent"
            />
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <label htmlFor="subject" className="text-portfolio-lightest">Subject</label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-portfolio-navy border-portfolio-secondary focus:border-portfolio-accent"
          />
        </div>

        <div className="space-y-2 mb-6">
          <label htmlFor="message" className="text-portfolio-lightest">Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-portfolio-navy border-portfolio-secondary focus:border-portfolio-accent"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-transparent border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </section>
  );
};

export default ContactSection;
