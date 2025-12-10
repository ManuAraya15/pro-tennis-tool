import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


interface LayoutRootProps {
    children: React.ReactNode
}

const LayoutRoot = ({children}: LayoutRootProps) => {
    
    return (
        <>
            <Navbar/>
            <main className="min-h-[70vh]">
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default LayoutRoot;