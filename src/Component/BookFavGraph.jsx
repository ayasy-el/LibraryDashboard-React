import Chart from 'react-apexcharts';

let series = [
    {
        name: "Peminat:",
        data: [280, 250, 325, 215, 250, 310, 280, 250],
    },
];

let option = {
    chart: {
        offsetX: -15,
        toolbar: {show: true},
        fontFamily: "inherit",
        sparkline: {enabled: false},
    },

    colors: ["#5D87FF"],

    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "35%",
            borderRadius: [6],
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "all",
        },
    },
    markers: {size: 0},

    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },

    grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },

    xaxis: {
        type: "genre",
        categories: [
            "Komputer",
            "Bahasa",
            "Hukum",
            "Fiksi",
            "Sejarah",
            "Sains",
            "Agama",
            "Sosial"
        ],
        labels: {
            show: false,
        },
    },

    yaxis: {
        show: true,
        min: 0,
        max: 400,
        tickAmount: 4,
        labels: {
            style: {
                cssClass: "grey--text lighten-2--text fill-color",
            },
        },
    },
    stroke: {
        show: true,
        width: 3,
        lineCap: "butt",
        colors: ["transparent"],
    },

    tooltip: {theme: "light"},

    responsive: [
        {
            breakpoint: 600,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 3,
                    },
                },
            },
        },
    ],
};

export default function BookFavGraph() {
    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body pb-0">
                    <div className="row align-items-start">
                        <div className="col-8">
                            <h5 className="card-title mb-3 fw-semibold">
                                Favourite Genre
                            </h5>
                            <h4 className="fw-semibold mb-3">$6,820</h4>
                            <div className="d-flex align-items-center pb-1">
                                <span
                                    className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                    <i className="ti ti-arrow-down-right text-danger"/>
                                </span>
                                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                <p className="fs-3 mb-0">last year</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex justify-content-end">
                                <div
                                    className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                                    <i className="ti ti-currency-dollar fs-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Chart options={option} type="bar" series={series} height={180}/>
            </div>
        </div>
    )
}