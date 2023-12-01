import Chart from 'react-apexcharts';

let series = [50, 20, 300];

let option = {
    color: "#adb5bd",
    labels: ["Borrowed", "Overdue", "Available"],
    chart: {
        offsetX: -15,
        fontFamily: "Plus Jakarta Sans', sans-serif",
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
        },
    },
    stroke: {
        show: false,
    },

    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    colors: ["#625dff", "#ffae1f", "#13deb9"],

    responsive: [
        {
            breakpoint: 321,
            options: {
                chart: {
                    offsetX: 0,
                    width: 100,
                },
            },
        },
        {
            breakpoint: 460,
            options: {
                chart: {
                    width: 160,
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
    tooltip: {
        theme: "dark",
        fillSeriesColor: false,
    },
};

export default function BooksStatus() {
    return (
        <div className="col-lg-12 p-0">
            {/* Yearly Breakup */}
            <div className="card overflow-hidden">
                <div className="card-body p-4">
                    <h5 className="card-title mb-0 fw-semibold">Books</h5>
                    <div className="row align-items-center">
                        <div className="col-9">
                            <h4 className="fw-semibold mb-3">1.358</h4>
                            <div className="d-flex align-items-center mb-3">
                                <span
                                    className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                    <i className="ti ti-arrow-up-left text-success"/>
                                </span>
                                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                <p className="fs-3 mb-0">last year</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="me-2">
                                    <span
                                        className="round-8 bg-primary rounded-circle me-1 d-inline-block"/>
                                    <span className="fs-2">Borrowed</span>
                                </div>
                                <div className="me-2">
                                    <span
                                        className="round-8 bg-warning rounded-circle me-1 d-inline-block"/>
                                    <span className="fs-2">Overdue</span>
                                </div>
                                <div>
                                    <span
                                        className="round-8 bg-success rounded-circle me-1 d-inline-block"/>
                                    <span className="fs-2">Available</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex justify-content-center">
                                <Chart options={option} type="donut" series={series} width={150}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}