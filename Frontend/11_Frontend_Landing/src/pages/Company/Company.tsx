import React, { FC } from 'react'
import styles from './Company.module.css'
import { Header } from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { CompanyBlock } from '../../components/companyBlock/CompanyBlock'
import { MobileHeader } from '../../components/Header/MobileHeader'
import { useScreenDetector } from '../../hooks/useScreenDetector'
import { CompanyDoneBlock } from '../../components/companyDoneBlock/CompanyDoneBlock'
import { CompanyInfo } from '../../components/companyInfo/CompanyInfo'
import { CompanyPowered } from '../../components/companyPowered/CompanyPowered'
import { CompanyCore } from '../../components/companyCore/CompanyCore'
import { CompanyRole } from '../../components/companyRole/CompanyRole'
import { CompanyContactUs } from '../../components/companyContactUs/CompanyContactUs'
interface Props {

}

export const Company: FC<Props> = ({ }) => {
    const { isTablet } = useScreenDetector();
    return (

        <div className={styles.company}>
            {isTablet ? <MobileHeader /> : <Header buttonBackground="#FF474D" />}
            <CompanyBlock />
            <CompanyDoneBlock />
            <CompanyInfo />
            <CompanyPowered />
            <CompanyCore />
            <CompanyRole />
            <CompanyContactUs />
            <Footer />
        </div>
    )
}