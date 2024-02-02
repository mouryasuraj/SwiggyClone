

const BillDetails = ({ total, gst }) => {
    return (
        <div className="billing-container">
            <h4>Bill Details</h4>
            <hr />
            <div className="total-container">
                <p>Item total</p>
                <p><i className="fa-solid fa-indian-rupee-sign" />{total.toFixed(2)}</p>
            </div>
            <div className="gst">
                <p>GST Charges</p>
                <p><i className="fa-solid fa-indian-rupee-sign" />{gst.toFixed(2)}</p>
            </div>
            <hr />
            <div className="pay">
                <h4>To Pay</h4>
                <p><i className="fa-solid fa-indian-rupee-sign" />{(total + gst).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default BillDetails
