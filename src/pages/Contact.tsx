import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, ArrowLeft, Leaf, Sprout, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  postcode: z.string().min(3, "Please enter your postcode"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  preferredDate: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your project"),
  contactMethod: z.enum(["phone", "email"]),
  gdprConsent: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      postcode: "",
      services: [],
      preferredDate: "",
      message: "",
      contactMethod: "email",
      gdprConsent: false,
    },
  });

  const services = [
    "Garden Maintenance",
    "Hedge Trimming",
    "Tree Pruning",
    "Garden Clearance",
    "Patios",
    "Decking",
    "Fencing",
    "Turfing",
    "Landscaping Design",
    "Other",
  ];


  const toggleService = (service: string) => {
    const updated = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setSelectedServices(updated);
    form.setValue("services", updated);
  };

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    // Prepare the payload to match your Supabase column names
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      postcode: data.postcode,
      message: data.message,
      contact_method: data.contactMethod,
      services_required: data.services.join(", "), // convert array → string
    };

    // Insert the data into your 'quotes' table
    const { error } = await supabase.from("quotes").insert([payload]);

    if (error) {
      console.error("Supabase error:", error.message);
      toast.error("Something went wrong. Please try again later.");
    } else {
      toast.success(
        "Thanks for your enquiry! We'll respond within 48 hours. For urgent enquiries, call 07542 973733.",
        { duration: 6000 }
      );

      form.reset();
      setSelectedServices([]);
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    toast.error("Unexpected error. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        {/* Animated floating leaves */}
        <motion.div
          className="absolute top-10 left-10 text-primary-foreground/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf size={48} />
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-primary-foreground/20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower2 size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-primary-foreground/20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sprout size={36} />
        </motion.div>
        
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to transform your outdoor space? Request a free quote or book a consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Angeli Gardens</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch for a free consultation and quote. We typically respond within 48 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:07542973733" className="text-muted-foreground hover:text-primary">
                      07542 973733
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:Angeligardens1@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Angeligardens1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Areas</h3>
                    <p className="text-muted-foreground">London, Surrey & Berkshire</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 7:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Growing plant animation beside form */}
              <motion.div
                className="absolute -left-8 top-0 text-primary/30 hidden xl:block"
                initial={{ scaleY: 0, originY: 1 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Sprout size={64} />
              </motion.div>
              
              <div className="bg-card p-8 rounded-lg shadow-lg border-2 relative hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Leaf className="text-primary" size={28} />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Request a Quote</h2>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="07XXX XXXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postcode *</FormLabel>
                          <FormControl>
                            <Input placeholder="SW1A 1AA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <FormLabel>Services Required *</FormLabel>
                          <div className="grid grid-cols-2 gap-3">
                            {services.map((service) => (
                              <div key={service} className="flex items-center space-x-2">
                                <Checkbox
                                  id={service}
                                  checked={selectedServices.includes(service)}
                                  onCheckedChange={() => toggleService(service)}
                                />
                                <label
                                  htmlFor={service}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {service}
                                </label>
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contactMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Method *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="phone">Phone</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gdprConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the privacy policy and consent to being contacted *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full group" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Request Free Quote"}
                      <motion.span
                        className="inline-block ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🌱
                      </motion.span>
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
