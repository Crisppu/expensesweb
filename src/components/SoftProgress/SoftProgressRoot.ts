import { LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

//SoftProgressRoot
interface OwnerState{
    variant?: string;
    color?: string;
    value?: number;
}
interface ProgressProps extends React.ComponentProps<typeof LinearProgress > {
    ownerState: OwnerState;
    href?: string;
}

export const SoftProgressRoot = styled(LinearProgress)<ProgressProps>
(({theme, ownerState}) =>{
    console.log(theme);
    console.log(ownerState);
    return ({

    });

});
