// eslint-disable-next-line react/prop-types
const BookItem = ({imageUrl, title, author}) => {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={imageUrl}
                        className="rounded-1 object-fit-cover"
                        width={45}
                        height={55}
                        alt={title}
                    />
                    <div className="ms-3">
                        <h6 className="fw-semibold mb-1">{title}</h6>
                        <span className="fw-normal text-body-tertiary">{author}</span>
                    </div>
                </div>
            </td>
            <td className="text-end">
                <button
                    type="button"
                    className="btn me-2 mb-1 btn-primary btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                >
                    <i className="fs-5 ti ti-check"/>
                </button>
                <button
                    type="button"
                    className="btn mb-1 btn-danger btn-circle btn-sm d-inline-flex align-items-center justify-content-center"
                >
                    <i className="fs-5 ti ti-x"/>
                </button>
            </td>
        </tr>
    );
};
const BookListComponent = () => {

    const bookItems = [
            {
                "imageUrl": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img1.jpg",
                "title": "Puzzle of Destiny",
                "author": "Jane Doe"
            },
            {
                "imageUrl": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img2.jpg",
                "title": "Whispers in the Wind",
                "author": "John Smith"
            },
            {
                "imageUrl": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img4.jpg",
                "title": "Shadows of Serenity",
                "author": "David Brown"
            },
            {
                "imageUrl": "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/blog/blog-img5.jpg",
                "title": "Fragments of Eternity",
                "author": "Sarah Wilson"
            }
        ]
    ;

    return (
        <div className="col-lg-5 d-flex align-items-stretch">
            <div className="card w-100">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <h5 className="card-title fw-semibold">Request Book</h5>
                        <a href="#">
                            <i className="ti ti-chevron-right text-black fs-8"/>
                        </a>
                    </div>
                    <div className="table-responsive">
                        <table className="table align-middle text-nowrap mb-0">
                            <thead>
                            <tr className="text-muted fw-semibold">
                                <th>Books</th>
                                <th className="text-end">Action</th>
                            </tr>
                            </thead>
                            <tbody className="border-top">
                            {bookItems.map((book, index) => (
                                <BookItem
                                    key={index}
                                    imageUrl={book.imageUrl}
                                    title={book.title}
                                    author={book.author}
                                />
                            ))}
                            <tr>
                                <td colSpan={2}>
                                    <button
                                        type="button"
                                        className="btn rounded-pill w-100 bg-primary-subtle text-primary"
                                    >
                                        View All
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookListComponent;
