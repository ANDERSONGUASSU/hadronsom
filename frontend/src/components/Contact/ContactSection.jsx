import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyData } from "features/contactSlice";
import { motion } from "framer-motion";
import SectionTitle from "components/SectionTitle";
import { Skeleton, Card } from "@nextui-org/react";
import Breadcrumbs from "./Breadcrumbs";
import ContactInfoItem from "./ContactInfoItem";
import GoogleMaps from "./GoogleMaps";
import ContactForm from "./ContactForm";
import { container, fadeInUp, fadeInDelayed, fadeInLeft } from "animation/motionVariants";

const ContactSection = () => {
  const dispatch = useDispatch();

  const { companyData, isLoading } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(fetchCompanyData());
  }, [dispatch]);

  return (
    <section id="contact" className="container mt-24 contact section">
      <Breadcrumbs />
      <SectionTitle title="Contato" subtitle="" />

      <div className="container mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <Card key={index} isBlurred className="shadow-lg">
                <Skeleton className="rounded-lg h-12 w-full" />
                <Skeleton className="rounded-lg h-6 w-3/4 mt-2" />
              </Card>
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <ContactInfoItem
              title="Endereço"
              icon={companyData.address_icon}
              description={`${companyData.address.address}, ${companyData.address.number} - ${companyData.address.neighborhood} - ${companyData.address.city} - ${companyData.address.state}, CEP ${companyData.address.cep}`}
              variants={fadeInUp}
            />
            <ContactInfoItem
              title="Horário de Funcionamento"
              icon={companyData.opening_hours_icon}
              description={companyData.opening_hours}
              variants={fadeInUp}
            />
            <ContactInfoItem
              title="Telefones"
              icon={companyData.phone_icon}
              description={companyData.phone}
              variants={fadeInDelayed}
            />
            <ContactInfoItem
              title="E-mail"
              icon={companyData.email_icon}
              description={companyData.email}
              variants={fadeInDelayed}
            />
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <motion.div variants={fadeInLeft} initial="hidden" animate="visible">
            {isLoading ? (
              <Card isBlurred>
                <Skeleton className="rounded-lg h-96 w-full" />
              </Card>
            ) : (
              <GoogleMaps
                mapLink={
                  companyData.social_media_profiles.find(
                    (profile) => profile.name === "google maps"
                  )?.link
                }
              />
            )}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
