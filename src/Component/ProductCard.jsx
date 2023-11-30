// eslint-disable-next-line react/prop-types
const BookCard = ({imageSrc, bookName, price, originalPrice}) => {
    return (
        <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden rounded-2">
                <div className="position-relative">
                    <a href="javascript:void(0)">
                        <img
                            src={imageSrc}
                            className="card-img-top rounded-0"
                            alt="..."
                        />
                    </a>
                    <a
                        href="javascript:void(0)"
                        className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Add To Cart"
                    >
                        <i className="ti ti-chevron-right fs-4"/>
                    </a>
                </div>
                <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">{bookName}</h6>
                    <div className="d-flex align-items-center justify-content-between">
                        <h6 className="fw-semibold fs-4 mb-0">
                            {price}{' '}
                            <span className="ms-2 fw-normal text-muted fs-3">
                                <del>{originalPrice}</del>
                            </span>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BookList = () => {
    const books = [
        {
            imageSrc: "/images/products/s1.jpg",
            bookName: "The Art of War",
            price: "$15",
            originalPrice: "$20"
        },
        {
            imageSrc: "/images/products/s4.jpg",
            bookName: "To Kill a Mockingbird",
            price: "$12",
            originalPrice: "$18"
        },
        {
            imageSrc: "/images/products/s7.jpg",
            bookName: "1984",
            price: "$10",
            originalPrice: "$15"
        },
        {
            imageSrc: "/images/products/s11.jpg",
            bookName: "The Great Gatsby",
            price: "$14",
            originalPrice: "$25"
        }
        // ... tambahkan data buku lainnya sesuai kebutuhan
    ];

    return (
        <div className="row">
            {books.map((book, index) => (
                <BookCard
                    key={index}
                    imageSrc={book.imageSrc}
                    bookName={book.bookName}
                    price={book.price}
                    originalPrice={book.originalPrice}
                />
            ))}
        </div>
    );
};

export default BookList;
