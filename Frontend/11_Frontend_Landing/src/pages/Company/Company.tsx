import { FC } from 'react'
import styles from './Company.module.css'
import Footer from '../../components/Footer/Footer'
import { CompanyBlock } from '../../components/companyBlock/CompanyBlock'
import { CompanyDoneBlock } from '../../components/companyDoneBlock/CompanyDoneBlock'
import { CompanyInfo } from '../../components/companyInfo/CompanyInfo'
import { CompanyPowered } from '../../components/companyPowered/CompanyPowered'
import { CompanyCore } from '../../components/companyCore/CompanyCore'
import { CompanyRole } from '../../components/companyRole/CompanyRole'
import { CompanyContactUs } from '../../components/companyContactUs/CompanyContactUs'
import Wrapper from '../../components/Wrapper/Wrapper'
interface Props {

}

export const Company: FC<Props> = ({ }) => {
    return (

        <div className={styles.company}>
            <Wrapper />
            <div style={{ paddingTop: "90px" }}></div>
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