import { MenuItem } from "@mui/material";
import { forwardRef } from "react";
import { menuImage, menuItem } from ".";
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography";
//icons de material ui
import WatchLaterIcon from '@mui/icons-material/WatchLater';
interface NotificationItemProps {
    color?: "dark"|"light"|"primary"|"secondary"|"info"|"success"|"warning"|"error"|"white"|"black"|string;
    image: React.ReactNode; // Puede ser cualquier elemento renderizable, como un <img>
    title: string[];        // Un array de cadenas de texto
    date: string;           // Una cadena de texto para la fecha
    onClick: () => void;    // Funcion que se ejecuta al hacer clic, sin parametros y sin retorno
}
export const NotificationItem = forwardRef<HTMLLIElement, NotificationItemProps>(
    ({ color="dark",image,title, date, onClick, ...rest }, ref) => {
    return(
        <MenuItem
        onClick={onClick}
        ref={ref}
        {...rest}
        sx={(theme) => menuItem(theme)}
        >
            <SoftBox
            width="2.25rem"
            height="2.25rem"
            mt={0.5}
            mr={2}
            mb={0.5}
            sx={(theme) => menuImage(theme, {color})}

            ownerState={{
                borderRadius:"lg",
            }}
            >
                {image}
            </SoftBox>
            <SoftBox>
                <SoftTypography
                variant="button"
                ownerState={{ color:"text", textTransform:"capitalize", fontWeight:"regular"}}
                >
                    <strong>{title[0]}</strong>{title[1]}
                </SoftTypography>
                <SoftTypography
                variant="caption"
                ownerState={{color:"secondary"}}
                sx={{display:"flex", alignItems:"center",mt:0.5}}
                >
                    <SoftTypography
                    variant="button"
                    ownerState={{color:"secondary"}}
                    >
                        <WatchLaterIcon
                            sx={{lineHeight:1.2, mr:0.5}}
                        />
                    </SoftTypography>
                    {date}
                </SoftTypography>

            </SoftBox>
        </MenuItem>
    )
});
