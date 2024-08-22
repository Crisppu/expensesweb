import { Link } from "@mui/material";
import SoftBox from "../../components/SoftBox";
//import typography from "../../assets/theme/base/typography";

// import typography from "assets/theme/base/typography";
function Footer() {
  const  company = { href: "https://www.creative-tim.com/", name: "Creative Tim" };
  const links = [
    { href: "https://www.creative-tim.com/", name: "Creative Tim" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ];
  const { href, name } = company;
  //const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
    //   <SoftBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link key={link.name} href={link.href} target="_blank">
          {/* <SoftTypography variant="button" fontWeight="regular" color="text"> */}
            {link.name}
          {/* </SoftTypography> */}
        </Link>
    //   </SoftBox>
    ));
  return (
        <SoftBox
        width="100%"
        display="flex"

        ownerState={
            {
                variant: "contained",
                bgColor: "lightblue",
                color: "white",
                opacity: 0.9,
                borderRadius: "5px",
                shadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"
            }
        }

        >
            <Link href={href} target="_blank">
                {/* <SoftTypography variant="button" fontWeight="medium"> */}
                    &nbsp;{name}&nbsp;
                {/* </SoftTypography> */}
                </Link>
            {renderLinks()}
        </SoftBox>

    )
}
export default Footer;