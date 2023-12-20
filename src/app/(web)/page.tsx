import React from "react";
import About from "@/app/(web)/_components/About";

import Header from "@/components/general/Header";
import Spotlight from "./_components/Spotlight";
import Projects from "./_components/Projects";
import Form from "./_components/Form";
import Footer from "./_components/Footer";
import Services from "./_components/Services";

export default function Home() {
    return (
        <>
            <Header />
            <Spotlight />
            <About />
            <Services />
            {/* <Services /> */}
            <Projects />
            <Form />
            <Footer />
        </>
    );
}
