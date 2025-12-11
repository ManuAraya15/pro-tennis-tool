import IncomingMatches from "./components/IncomingMatches";
import MatchInvitations from "./components/MatchInvitations";
import PreviousMatches from "./components/PreviousMatches";

interface MatchesPageProps {
    
}

const MatchesPage = (props: MatchesPageProps) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <IncomingMatches/>
            <MatchInvitations/>
            <PreviousMatches/>
        </div>
    );
};

export default MatchesPage;