import { Button } from "antd";
import MainContentHeader from "../common/main-content-header";
import "./merchant-details-page.css";
import WhiteBorder from "../common/white-border";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";

const MerchantDetailsPage = () => {
  return (
    <div className="main scrollbar">
      <MainContentHeader title="PESHOT INFO SYSTEM" />
      <div className="first-section">
        <div>
          <div className="heading-button">
            <div className="playfair-display">Basic Details</div>
            <Button type="primary">Update Info</Button>
          </div>
          <div className="details-grid-2">
            <div>Merchant ID</div>
            <div>TP-2027</div>

            <div>User Name</div>
            <div>PESHOT INFO SYSTEM</div>

            <div>Auth Sign Name</div>
            <div>PESHOT INFO SYSTEM</div>

            <div>Reseller Name</div>
            <div>SinrisePay</div>

            <div>Email- ID</div>
            <div>peshot@gmail.com</div>

            <div>Mobile #</div>
            <div>+91 9856 548 625</div>

            <div>Company Website</div>
            <div>www.twstwebsite.in</div>

            <div>Business Address</div>
            <div>
              H.No. 13094, Sri Nagar, Uppal, Hyderabad, Telangana, India,500039
            </div>
          </div>
        </div>
        <div>
          <div className="heading-button">
            <div className="playfair-display">Business Details</div>
            <Button type="primary">Update Info</Button>
          </div>
          <div className="details-grid-2">
            <div>Business Name</div>
            <div>PESHOT INFO SYSTEM</div>

            <div>Business Type</div>
            <div>Private Limited</div>

            <div>Business Category</div>
            <div>Financial Services</div>

            <div>Business Sub Category</div>
            <div>Stock Brokerage and Trading</div>

            <div>Company Expenditure</div>
            <div>25Lakhs - 50Lakhs</div>

            <div>Bank Name</div>
            <div>Bandhan Bank</div>

            <div>Bank Account Number</div>
            <div>26553732091</div>

            <div>IFSC Code</div>
            <div>BDBL0002286</div>

            <div>Business PAN Number</div>
            <div>XKPCD3847H</div>

            <div>Business GST Number</div>
            <div>36XKPCD3847H1Z2</div>

            <div>Auth Sign AADHAR Number</div>
            <div>290662872603</div>

            <div>Auth Sign PAN NUmber</div>
            <div>ASDPK7462L</div>
          </div>
        </div>
      </div>
      <WhiteBorder />
      <div>
        <div className="heading-button">
          <div className="playfair-display">Merchant Charges</div>
          <Button type="primary">Edit Changes</Button>
        </div>
        <div className="details-grid-3 ">
          <div>
            <div className="playfair-display-24">Pay-In Charges</div>
            <WhiteBorder />
            <div className="details-grid-2">
              <div>UPI</div>
              <div>4.05</div>

              <div>QR Code</div>
              <div>4.04</div>

              <div>DC Charges</div>
              <div>--</div>

              <div>CC Chanrges</div>
              <div>--</div>

              <div>Net Banking</div>
              <div>--</div>

              <div>Wallet</div>
              <div>--</div>

              <div>Merchant Charges</div>
              <div>Disabled</div>
            </div>
          </div>
          <div>
            <div className="playfair-display-24">Adjustment Charges</div>
            <WhiteBorder />
            <div className="details-grid-2">
              <div>UPI</div>
              <div>4.05</div>

              <div>QR Code</div>
              <div>4.04</div>

              <div>DC Charges</div>
              <div>--</div>

              <div>CC Chanrges</div>
              <div>--</div>

              <div>Net Banking</div>
              <div>--</div>

              <div>Wallet</div>
              <div>--</div>

              <div>Merchant Charges</div>
              <div>Disabled</div>
            </div>
          </div>
          <div>
            <div className="playfair-display-24">Pay-Out Charges</div>
            <WhiteBorder />
            <div className="details-grid-2">
              <div>Mid</div>
              <div>4.05</div>

              <div>Max</div>
              <div>4.04</div>

              <div>IMPS</div>
              <div>--</div>

              <div>NEFT</div>
              <div>--</div>

              <div>RTGS</div>
              <div>--</div>

              <div>UPI</div>
              <div>--</div>

              <div>Paytm</div>
              <div>--</div>

              <div>Amazon</div>
              <div>--</div>
            </div>
          </div>
        </div>
      </div>
      <WhiteBorder />
      <div>
        <div className="heading-button">
          <div className="playfair-display">Merchant Documents</div>
          <Button type="primary">Update Documents</Button>
        </div>
        <div className="third-section">
          <div className="merchant-documents-item">
            <div>Company PAN Card</div> <div>companypancard.pdf</div>
            <div className="approved">
              Approved
              <EditOutlined />
              <EyeOutlined />
            </div>
          </div>
          <WhiteBorder />

          <div className="merchant-documents-item">
            <div>Company GST</div>
            <div>companygst.pdf</div>
            <div className="yet-to-approve">
              Yet to Approve
              <EditOutlined />
              <EyeOutlined />
            </div>
          </div>
          <WhiteBorder />

          <div className="merchant-documents-item">
            <div>Bank Statement </div>
            <div>bankstatement.pdf</div>
            <div className="rejected">
              Rejected
              <EditOutlined />
              <EyeOutlined />
            </div>
          </div>
          <WhiteBorder />

          <div className="merchant-documents-item">
            <div>Certification of Incorporation</div>
            <div>cindoc.pdf</div>
            <div className="rejected">
              Rejected
              <EditOutlined />
              <EyeOutlined />
            </div>
          </div>
          <WhiteBorder />

          <div className="merchant-documents-item">
            <div>AOA Doc</div>
            <div>aoadoc.pdf</div>
            <div className="rejected">
              Rejected
              <EditOutlined />
              <EyeOutlined />
            </div>
          </div>
          <WhiteBorder />

          <div className="merchant-documents-item">
            <div>AUthorized Signatory Pan Card</div>
            <div>merchantpancard.pdf</div>
            <div className="rejected">
              Rejected
              <EditOutlined />
              <EyeOutlined />
            </div>
          </div>
          <WhiteBorder />

          <div className="merchant-documents-item">
            <div>Authorized Signatory Aadhar Card</div>
            <div>merchantaadharcard.pdf</div>
            <div className="rejected">
              Rejected
              <EditOutlined />
              <EyeOutlined />
            </div>
          </div>
          <WhiteBorder />

          <div className="merchant-documents-item">
            <div>MOA Doc</div>
            <div>moadoc.pdf</div>
            <div className="rejected">
              Rejected
              <EditOutlined />
              <EyeOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDetailsPage;
