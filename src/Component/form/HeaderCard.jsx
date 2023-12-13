export function HeaderCard({header, subheader}) {
    return <div className="py-3 mb-4 text-center border-bottom">
        <h2 className="fw-semibold text-center">{header}</h2>
        <p className="card-subtitle text-center">
            {subheader}
        </p>
    </div>;
}