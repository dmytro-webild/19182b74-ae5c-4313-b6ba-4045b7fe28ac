"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Sparkles, Zap, Award, Star, MessageCircle, TrendingUp, Users, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumLarge"
      background="noise"
      cardStyle="solid"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Ascend Digital"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Get Your Free Audit", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="We Don't Just Build Your Digital Presence"
          description="Website design, AI automation, and social media management — all under one roof. Trusted by businesses across Lahore, USA, and UK"
          tag="Digital Transformation"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[{ text: "Get Your Free Audit", href: "#contact" }]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-modern-digital-agency-dashboard-interf-1773773909375-375f5849.png"
          imageAlt="Ascend Digital Agency Dashboard"
          background={{ variant: "noise" }}
          ariaLabel="Hero section - Ascend Digital Co digital agency services"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <AboutMetric
          title="Proven Results That Drive Growth"
          metrics={[
            { icon: TrendingUp, label: "Average Client Growth", value: "+240%" },
            { icon: Users, label: "Businesses Transformed", value: "500+" },
            { icon: Globe, label: "Global Reach", value: "3 Countries" },
            { icon: Award, label: "Industry Experience", value: "8+ Years" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="Company metrics and achievements"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Our Services"
          description="Comprehensive digital solutions designed to elevate your business and drive measurable results"
          tag="Complete Solutions"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              tag: "Web Design",              title: "Premium Website Design",              subtitle: "Conversion-focused digital experiences",              description: "Custom-designed websites that blend aesthetic appeal with strategic functionality. We create responsive, fast-loading sites optimized for search engines and user experience that convert visitors into customers.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-stunning-modern-website-on-a-desktop-s-1773773909699-859409b0.png",              imageAlt: "Premium website design showcase",              buttons: [{ text: "Learn More", href: "#" }]
            },
            {
              id: 2,
              tag: "AI Automation",              title: "AI Automation & Integration",              subtitle: "Intelligent systems that work for you",              description: "Harness the power of artificial intelligence to automate workflows, streamline operations, and enhance customer engagement. From chatbots to email sequences, we implement smart automation that saves time and increases efficiency.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/an-abstract-representation-of-ai-automat-1773773909488-32810f71.png",              imageAlt: "AI automation technology visualization",              buttons: [{ text: "Explore AI Solutions", href: "#" }]
            },
            {
              id: 3,
              tag: "Social Media",              title: "Social Media Management",              subtitle: "Strategic engagement and growth",              description: "Strategic content creation, community management, and paid advertising across all major platforms. We build your brand presence, engage your audience authentically, and drive consistent growth through data-driven social strategies.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-vibrant-social-media-management-dashbo-1773773910234-410eadc6.png",              imageAlt: "Social media management dashboard",              buttons: [{ text: "View Strategy", href: "#" }]
            }
          ]}
          ariaLabel="Services section"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Our Portfolio"
          description="Real projects. Real results. Real businesses transformed across diverse industries and markets."
          tag="Success Stories"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              name: "Healthcare Clinic",              price: "+150% Appointments",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-modern-minimalist-healthcare-clinic-we-1773773909716-30dd06d2.png",              imageAlt: "Modern healthcare clinic website"
            },
            {
              id: "2",              name: "Fine Dining Restaurant",              price: "+200% Online Orders",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-luxurious-restaurant-website-showcase--1773773911020-e41f8e77.png",              imageAlt: "Premium restaurant website"
            },
            {
              id: "3",              name: "E-Commerce Store",              price: "+320% Sales Growth",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-modern-e-commerce-store-interface-feat-1773773910183-e3bdcf88.png",              imageAlt: "Modern ecommerce platform"
            },
            {
              id: "4",              name: "Real Estate Agency",              price: "+280% Inquiries",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-professional-real-estate-website-showc-1773773910518-62b59273.png",              imageAlt: "Professional real estate website"
            },
            {
              id: "5",              name: "Educational Institution",              price: "+190% Enrollments",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-modern-minimalist-healthcare-clinic-we-1773773909716-30dd06d2.png",              imageAlt: "School digital presence"
            },
            {
              id: "6",              name: "Salon & Wellness",              price: "+240% Bookings",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-luxurious-restaurant-website-showcase--1773773911020-e41f8e77.png",              imageAlt: "Luxury salon website"
            }
          ]}
          ariaLabel="Portfolio section"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted By Leading Businesses"
          description="Partnering with forward-thinking companies across Lahore, USA, and UK"
          textboxLayout="default"
          useInvertedBackground={true}
          names={[
            "Healthcare Clinics",            "Fine Dining Restaurants",            "E-Commerce Brands",            "Real Estate Firms",            "Educational Institutions",            "Salon & Wellness Centers",            "Tech Startups",            "Service Providers"
          ]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-minimalist-modern-business-logo-for-a--1773773907987-0335f919.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-contemporary-logo-design-for-a-growing-1773773909156-903b19d1.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-professional-healthcare-medical-practi-1773773909124-20524853.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-luxury-hotel-or-salon-branding-logo-wi-1773773909332-408b88ae.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-school-or-educational-institution-logo-1773773908468-10e9b7b9.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-technology-startup-or-fintech-company--1773773910166-de4a828c.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-creative-agency-or-design-studio-logo--1773773909195-d5ce5568.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-minimalist-modern-business-logo-for-a--1773773907987-0335f919.png"
          ]}
          speed={50}
          showCard={true}
          ariaLabel="Social proof section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from real business owners who've experienced transformative growth with Ascend Digital"
          tag="Client Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",              name: "Dr. Ayesha Khan",              role: "Clinic Owner",              company: "Prime Health Clinic, Lahore",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-professional-headshot-of-a-female-clin-1773773908924-5a1d22dd.png"
            },
            {
              id: "2",              name: "Muhammad Hassan",              role: "Restaurant Owner",              company: "Taste of Lahore, Lahore",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-professional-headshot-of-a-male-restau-1773773909139-9b1dbb8a.png"
            },
            {
              id: "3",              name: "Sarah Johnson",              role: "E-Commerce Founder",              company: "StyleHub, USA",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-professional-headshot-of-a-female-e-co-1773773909213-e19345a1.png"
            },
            {
              id: "4",              name: "David Wilson",              role: "Real Estate Broker",              company: "Wilson Properties, UK",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-professional-headshot-of-a-male-uk-bas-1773773908720-210eb398.png"
            },
            {
              id: "5",              name: "Mrs. Fatima Ahmed",              role: "School Principal",              company: "Oxford Academy, Lahore",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-professional-headshot-of-a-female-scho-1773773909088-4272183b.png"
            },
            {
              id: "6",              name: "James Mitchell",              role: "Real Estate Agent",              company: "Premier Realty, USA",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-professional-headshot-of-a-male-real-e-1773773908414-0d0e733f.png"
            }
          ]}
          ariaLabel="Testimonials section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Quick answers to help you understand how Ascend Digital can transform your business"
          textPosition="left"
          useInvertedBackground={true}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How long does it take to see results?",              content: "Most clients see meaningful results within 4-6 weeks of project launch. Website traffic improvements and lead generation typically show within 30-60 days. Long-term growth and ROI compound over 3-6 months. We provide detailed analytics and monthly reports to track progress."
            },
            {
              id: "2",              title: "What's included in the free audit?",              content: "Our comprehensive free audit includes: current website analysis, competitor comparison, SEO health check, social media assessment, automation opportunity identification, and a personalized roadmap with specific recommendations tailored to your business goals."
            },
            {
              id: "3",              title: "Do you work with international clients?",              content: "Yes! We have extensive experience serving businesses in Lahore, USA, and UK. We understand local market dynamics while maintaining global execution standards. Our team is equipped to handle time zone differences and cultural nuances."
            },
            {
              id: "4",              title: "Can you help with specific industries?",              content: "Absolutely. We've successfully worked with healthcare clinics, restaurants, e-commerce stores, real estate agencies, educational institutions, salons, tech startups, and service businesses. We customize strategies based on your industry's unique needs."
            },
            {
              id: "5",              title: "What happens after the project is complete?",              content: "We provide ongoing support and maintenance packages. This includes regular updates, performance monitoring, content management, security updates, and strategic optimization. You can choose from various support tiers based on your needs."
            },
            {
              id: "6",              title: "How do you price your services?",              content: "Pricing is customized based on scope, timeline, and complexity. We offer flexible packages from starter to enterprise solutions. We believe in transparent pricing with no hidden fees and always provide detailed proposals before starting work."
            }
          ]}
          buttons={[{ text: "Get Your Free Audit", href: "#contact" }]}
          buttonAnimation="slide-up"
          ariaLabel="FAQ section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Digital Presence?"
          description="Connect with us today. Start with your free audit and let's build something extraordinary together."
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          background={{ variant: "noise" }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your WhatsApp number"
          buttonText="Start Free Audit"
          termsText="By clicking Start Free Audit, you're confirming that you agree with our Terms and Conditions."
          ariaLabel="Contact section - start your free digital audit"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B5GaFAtzppFY1Bfx848owYHqaY/a-modern-digital-agency-dashboard-interf-1773773909375-375f5849.png"
          imageAlt="Ascend Digital Co footer branding"
          logoText="Ascend Digital Co"
          copyrightText="© 2024 Ascend Digital Co. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "Website Design", href: "#services" },
                { label: "AI Automation", href: "#services" },
                { label: "Social Media Management", href: "#services" },
                { label: "Free Audit", href: "#contact" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "WhatsApp", href: "https://wa.me/923001234567" },
                { label: "Email", href: "mailto:hello@ascenddigital.com" },
                { label: "Lahore Office", href: "#" },
                { label: "Get Free Audit", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}