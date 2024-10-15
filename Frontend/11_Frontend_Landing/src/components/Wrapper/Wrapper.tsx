import { useScreenDetector } from '../../hooks/useScreenDetector';
import { Header } from '../Header/Header';
import { MobileHeader } from '../Header/MobileHeader';

function Wrapper() {

    const { isTablet } = useScreenDetector();
    return (
        <>
            {isTablet ? <MobileHeader /> : <Header />}
        </>
    )
}

export default Wrapper