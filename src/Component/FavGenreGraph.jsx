import Chart from 'react-apexcharts';

let series = [14, 23, 21, 17, 15, 30, 5]

let option = {
    chart: {
        type: 'polarArea',
    },
    stroke: {
        colors: ['#fff']
    },
    labels: [
        "Agama",
        "Komputer",
        "Hukum",
        "Sosial",
        "Sastra",
        "Sejarah",
        'lainnya'
    ],
    yaxis: {
        show: false
    },
    fill: {
        opacity: 0.8
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
}

export default function FavGenreGraph() {
    return (
        <div className="col-lg-12">
            <div className="card pb-9">
                <div className="card-body pb-0">
                    <div className="row align-items-start">
                        <div className="col-8">
                            <h5 className="card-title mb-3 fw-semibold">
                                Favourite Genre
                            </h5>
                            <h4 className="fw-semibold mb-0">10</h4>
                            <p className="fs-3 mb-3">Total Genre</p>

                        </div>
                        <div className="col-4">
                            <div className="d-flex justify-content-end">
                                <div
                                    className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                                    <i className="ti ti-book fs-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Chart options={option} type='polarArea' series={series} height={180} width={320}/>
            </div>
        </div>
    )
}