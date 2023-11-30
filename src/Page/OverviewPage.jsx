import Header from "../layout/Header.jsx";
import VisitorsGraph from "../Component/VisitorsGraph.jsx";
import StatsCard from "../Component/StatsCard.jsx";
import BooksStatus from "../Component/BooksStatus.jsx";
import FavGenreGraph from "../Component/FavGenreGraph.jsx";
import RequestBooks from "../Component/RequestBooks.jsx";
import OverdueDetails from "../Component/OverdueDetails.jsx";
import ProductCard from "../Component/ProductCard.jsx";

export default function OverviewPage() {
    return (
        <div className="body-wrapper">
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <StatsCard color='primary' icon='grid-dots' value='450' isIncrease={true} percentage='+9%'
                               timeline='this month'>Total Visitors</StatsCard>
                    <StatsCard color='success' icon='grid-dots' value='50' isIncrease={false} percentage='-3%'
                               timeline='this month'>Total Borrowed</StatsCard>
                    <StatsCard color='danger' icon='grid-dots' value='20' isIncrease={true} percentage='+5%'
                               timeline='this month'>Total Books Overdue</StatsCard>
                </div>
                <div className="row">
                    <VisitorsGraph/>
                    <div className="col-lg-4 row">
                        <BooksStatus/>
                        <FavGenreGraph/>
                    </div>
                </div>
                <div className="row">
                    <RequestBooks/>
                    <OverdueDetails/>
                </div>
                <div className="row">
                    <h3 className="fw-bolder fs-8 mb-9 py-9">New Books</h3>
                    <ProductCard/>
                </div>
            </div>
        </div>
    )
}