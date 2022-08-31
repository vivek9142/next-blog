import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Drnf mr your messages" />
      </Head>
      <ContactForm />;
    </>
  );
}
