import GridLayout, {Responsive, WidthProvider} from "react-grid-layout";
import './Basegrid.css';
import {useState} from "react";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Basegrid = () => {
    const [layout, setLayout] = useState([
        { i: "a", x: 0, y: 0, w: 1, h: 2},
        { i: "b", x: 1, y: 0, w: 3, h: 2,},
        { i: "c", x: 4, y: 0, w: 1, h: 2 },
        // { i: "c", x: 4, y: 0, w: 1, h: 2, maxW: 4 },
        // { i: "c", x: 4, y: 0, w: 1, h: 2, minW: 7 },
    ]);
    let layouts = {lg: layout, md: layout, sm: layout, xs: layout, xxs: layout}
    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            rowHeight={30}
            width={1200}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            // onDrag={(ele) => {console.log(ele)}}
            // onDrop={(layout, item, e) => {
            //     console.log(layout);
            //     console.log(item);
            //     console.log(e.target);
            // }}
            onLayoutChange={(layout) => {sessionStorage.setItem("layout", layout.toString()); console.log(layout)}}
        >
            <div key="a" className="box">a</div>
            <div key="b" className="box">b</div>
            <div key="c" className="box">c</div>
        </ResponsiveGridLayout>
    );
}