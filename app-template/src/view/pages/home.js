import logo from "../../assets/images/logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {fetchTemplateData} from "../../store/slices/templateSlice";
import {useEffect} from "react";
import TemplateWidget from "../widgets/tempateWidget";

function Home() {
    const dispatch = useDispatch();
    const currentCount = useSelector((state) => state.data.count);
    const fact = useSelector((state) => state.data.fact.data);

    useEffect(() => {
        dispatch(fetchTemplateData())
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>CurrentCount = {currentCount}</p>
                <p>Fact = {fact}</p>
                <TemplateWidget />
            </header>
        </div>
    );
}

export default Home;