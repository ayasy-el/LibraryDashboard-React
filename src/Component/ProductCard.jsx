// eslint-disable-next-line react/prop-types
const BookCard = ({imageSrc, bookName, publisher, category}) => {
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
                        <h6 className="fw-semibold fs-3 mb-0">
                            {publisher}{' '}
                            <span className="ms-2 fw-normal text-muted fs-3">
                                {category}
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
            bookName: "Book Title 1",
            publisher: "Publisher 1",
            category: "History"
        },
        {
            imageSrc: "/images/products/s4.jpg",
            bookName: "Book Title 2",
            publisher: "Publisher 2",
            category: "Fiction"
        },
        {
            imageSrc: "/images/products/s7.jpg",
            bookName: "Book Title 3",
            publisher: "Book Title 3",
            category: "Lifestyle"
        },
        {
            imageSrc: "/images/products/s11.jpg",
            bookName: "Book Title 4",
            publisher: "Publisher 4",
            category: "Social"
        }
    ];

    return (
        <div className="row">
            {books.map((book, index) => (
                <BookCard
                    key={index}
                    imageSrc={book.imageSrc}
                    bookName={book.bookName}
                    publisher={book.publisher}
                    category={book.category}
                />
            ))}
        </div>
    );
};

export default BookList;
