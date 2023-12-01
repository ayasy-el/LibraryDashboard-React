import Chart from 'react-apexcharts';

let series = [
    {
        name: "Pengunjung",
        data: [25, 66, 20, 40, 12, 58, 20],
    },
];

let option = {
    chart: {
        toolbar: {show: false},
        sparkline: {
            enabled: false,
        },
        fontFamily: "Plus Jakarta Sans', sans-serif",
    },

    color: ["#49BEFF"],

    dataLabels: {
        enabled: false,
    },

    xaxis: {
        type: "date",
        categories: [
            "16/08",
            "17/08",
            "18/08",
            "19/08",
            "20/08",
            "21/08",
            "22/08",
            "23/08",
        ],
    },

    stroke: {
        curve: "smooth",
        width: 2,
    },

    fill: {
        type: "gradient", // Mengatur tipe fill menjadi gradient
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0.1,
            stops: [40, 100],
        },
    },

    tooltip: {
        theme: "light",
        fixed: {
            enabled: true,
            position: "right",
        },
        x: {
            show: false,
        },
    },

    grid: {
        show: false
    },

    yaxis: {
        labels: {
            show: false,
        },
    },
};

export default function VisitorsGraph() {
    return (
        <div className="col-lg-8 d-flex align-items-strech">
            <div className="card w-100">
                <div className="card-body pb-0">
                    <div className="d-sm-flex d-block align-items-center justify-content-between">
                        <div className="mb-3 mb-sm-0">
                            <h5 className="card-title fs-8 fw-semibold">
                                Visitors Overview
                            </h5>
                            <p className="card-subtitle mb-0">Overview of Profit</p>
                        </div>
                        <select className="form-select w-auto">
                            <option value={1}>March 2023</option>
                            <option value={2}>April 2023</option>
                            <option value={3}>May 2023</option>
                            <option value={4}>June 2023</option>
                        </select>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="hstack mb-4 pb-1">
                                <div
                                    className="p-8 bg-primary-subtle rounded-1 me-3 d-flex align-items-center justify-content-center">
                                    <i className="ti ti-grid-dots text-primary fs-6"/>
                                </div>
                                <div>
                                    <h4 className="mb-0 fs-7 fw-semibold">$63,489.50</h4>
                                    <p className="fs-3 mb-0">Total Earnings</p>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-baseline mb-4">
                                    <span className="round-8 text-bg-primary rounded-circle me-6"/>
                                    <div>
                                        <p className="fs-3 mb-1">Earnings this month</p>
                                        <h6 className="fs-5 fw-semibold mb-0">$48,820</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline mb-4 pb-1">
                                    <span className="round-8 text-bg-secondary rounded-circle me-6"/>
                                    <div>
                                        <p className="fs-3 mb-1">Expense this month</p>
                                        <h6 className="fs-5 fw-semibold mb-0">$26,498</h6>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-primary w-100">
                                        View Full Report
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <Chart options={option} type="area" series={series} height={400}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}