import { FC } from 'react';
import styles from './Privacy.module.css';
import Footer from '../../components/Footer/Footer';
import { Tabs } from '../../components/tabsComponent/Tabs';
import Wrapper from '../../components/Wrapper/Wrapper';

interface Props { }

export const Privacy: FC<Props> = ({ }) => {
    return (
        <>
            <div className={styles.container}>
                <Wrapper />
                <h1 className={styles.info}>Tinvio Legal Info</h1>
                <Tabs />
                <div className={styles.content}>
                    <p>
                        Digital Services SG Six Pte. Ltd. (“Tinvio”), a company incorporated in Singapore, understands how important the privacy of personal information is to our users. At Tinvio, we want to make your experience satisfying and safe. This statement governs information you provide to us or we learn from your using or visiting any websites and applications owned and/or operated by Tinvio and any and all services provided to you by Tinvio (collectively, “Services”). Please read the following to learn more about our Privacy Policy (the “Policy”). The term “you” or “your” generally refers to the individual reading this Policy and/or using the Service.
                    </p>
                    <h3>What does this Privacy Policy Cover?</h3>
                    <p>
                        This Policy applies to all users and others who access the Services (“Users”) in or outside Singapore. By accessing or using the Service, or providing information to us in connection with the Services, you expressly and unequivocally indicate your acceptance of Tinvio’s Privacy Policy. This Privacy Policy does not apply to the practices, policies, or procedures employed by third parties and/or entities that Tinvio does not own, manage or control, or to individuals and others whom Tinvio does not employ, contract, manage, or control.
                    </p>
                    <h3>What information do we collect?</h3>
                    <p>
                        Depending on your user profile, Tinvio collects some or all of the following types of information:
                    </p>
                    <ul className={styles.list}>
                        <li>Your first and last name;</li>
                        <li>Your email address, phone number, and your desired password;</li>
                        <li>Your display name (this is the name by which you will register for Services);</li>
                        <li>Other profile data, such as additional contact information, location, occupation, and photo;</li>
                        <li>Payment information, such as credit card or financial account numbers (if applicable);</li>
                        <li>Market Research: From time to time, Tinvio may conduct online research, survey through email invitations, pop-up surveys and online focus groups. When participating in a survey, you may be asked to enter personal information;</li>
                        <li>Cookies and similar technologies: When you use the Services, we may use cookies and similar technologies like pixels, web beacons, and local storage to collect information about how you use the Service and provide features to you. With the exception to browsers you have the choice to accept or reject cookies, to be notified when a cookie is set or to set cookies;</li>
                        <li>Log file information: Log file information is automatically reported by your browser each time you make a request to access a site, i.e., with a page or app. It can also be provided when the content of the webpage or app is downloaded to your browser or device. When you use our Services, our servers automatically record certain log file information, including your web request, Internet Protocol (“IP”) address, browser type, referring / exit pages and URLs, number of clicks and how you interact with links on the webpage, domain names, landing pages, pages viewed, and other such information. The Information allows for Tinvio to provide you the features of the Service and for more accurate reporting and improvement of the Service.</li>
                    </ul>
                    <h3>What do we use your information for?</h3>
                    <p>
                        The information we collect from you may be used in one of the following ways:
                    </p>
                    <ul className={styles.list}>
                        <li>To provide our Services to you, to communicate with you about your use of our Services and for other customer service purposes;</li>
                        <li>To provide information that you have requested to receive from us in response to your opt-in requests;</li>
                        <li>To send information related to Tinvio’s products, services, and happenings, including newsletters and emails;</li>
                        <li>To administer your account, respond to your inquiries and send you administrative communications;</li>
                        <li>To improve, test, and monitor the effectiveness of the Services (we continually strive to improve the Service based on the information and feedback we receive from you);</li>
                        <li>To develop and test new products and features;</li>
                        <li>To statistically analyse user behavior and activity;</li>
                        <li>To conduct research and measurement activities;</li>
                        <li>To diagnose or fix technology problems;</li>
                        <li>To send you personalised emails or secure electronic messages pertaining to your interests, including news, announcements, and reminders.</li>
                    </ul>
                    <p>
                        Tinvio does not sell or share any information of any kind with any third party without your explicit consent, nor does Tinvio use any information for advertisements unrelated to the marketing and promotion of Tinvio’s Services.
                    </p>
                    <h3>How can I modify my information?</h3>
                    <p>
                        You may update, correct or delete your Personal Information by contacting us at . You may opt out of receiving promotional emails from Tinvio or our partners at any time.
                    </p>
                    <h3>How do we disclose your information?</h3>
                    <p>
                        Except as noted in this Policy, we do not sell, trade, or otherwise transfer to outside parties your personally identifiable information without your consent. Additionally, Tinvio does not use any personally identifiable information for advertisements unrelated to the marketing and promotion of the Services.
                    </p>
                    <p>
                        We may share your information (including but not limited to, information from cookies, log files, device identifiers, and usage data) with businesses that are legally part of the same group of companies that Tinvio is part of, or that become part of that group (“Affiliates”). Affiliates may use this information to help provide, understand, and improve the Services (including by providing analytics) and Affiliates’ own services (including by providing you with better and more relevant experiences).
                    </p>
                    <p>
                        We also may share your information with third-party organizations that help us provide the Service to you (“Service Providers”). Our Service Providers will be given access to your information as is reasonably necessary to provide the Service under reasonable confidentiality terms. For example, these providers may help us to administer our Website and Applications, manage and administer Services, or process credit card payments. Where required by law, these companies agree to use such information only for the purposes for which they have been engaged by us unless you expressly permit them to use your information for other purposes.
                    </p>
                    <p>
                        We may remove parts of data that can identify you and share anonymised data with other parties. We also combine your information with other information in a way that it is no longer associated with you and share that aggregated information.
                    </p>
                    <p>
                        We may collect and release Personally Identifiable Information and/or non-personally-identifiable information if required to do so by law, or in the good-faith belief that such action is necessary to comply with applicable laws and regulations in or outside Singapore, international law or respond to a court order, subpoena, or search warrant or equivalent, or where in our reasonable belief, an individual’s physical safety may be at risk or threatened.
                    </p>
                    <h3>What Happens in the Event of a Change of Control?</h3>
                    <p>
                        If we sell or otherwise transfer part or the whole of Tinvio or our assets to another organization (e.g., in the course of a transaction like a merger, acquisition, bankruptcy, dissolution, liquidation), your information collected through the Services may be among the items sold or transferred. The buyer or transferee will have to honor the commitments we have made in this Privacy Policy.
                    </p>
                    <h3>How We Store Your Information?</h3>
                    <p>
                        The Services are hosted in Singapore. If you are visiting from the United States, European Union or other regions with laws governing data collection and use that may differ from Singapore law, please note that you are transferring your personal data to Singapore which does not have the same data protection laws as the United States or EU or other regions and by providing your personal data you consent to: THE USE OF YOUR PERSONAL DATA FOR THE USES IDENTIFIED ABOVE IN ACCORDANCE WITH THIS PRIVACY POLICY; AND THE TRANSFER OF YOUR PERSONAL DATA TO SINGAPORE AS INDICATED ABOVE.
                    </p>
                    <p>
                        We use commercially reasonable safeguards to help keep the information collected through the Service secure. However, Tinvio cannot ensure the security of any information you transmit to Tinvio or guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed.
                    </p>
                    <h3>Third party links</h3>
                    <p>
                        We are not responsible for the practices employed by any websites or services linked to or from our Service, including the information or content contained within them. Please remember that when you use a link to go from our Service to another website or service, our Privacy Policy does not apply to those third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link on our website, are subject to that third party’s own rules and policies.
                    </p>
                    <h3>Access to and Modification of your Personal Information:</h3>
                    <p>
                        Upon request, Tinvio will provide you with information about whether we hold, or process on behalf of a third party, any of your personal information. To request this information please e-mail us at privacy@tinvio.com.
                    </p>
                    <p>
                        If your personal information changes, or if you no longer desire our service, you may correct, update, delete/remove, or ask to have it removed from a public forum or testimonial by making the change within your account settings or by contacting us via one of the methods listed in this Policy. Please note that copies of information that you have updated, modified, or deleted may continue to reside in our systems for a period of time. Also, you may not be able to remove your personal information from archived web pages that we no longer maintain. In the event we are unable to complete your access request, we will let you know if we are unable to do so and why. We may decline to process requests that are unreasonably repetitive, require disproportionate technical effort, jeopardize the privacy of others, are extremely impractical, or for which access is not otherwise required by local law.
                    </p>
                    <p>
                        If your information has been shared with a third party, as described above, or collected on behalf of a third party, then that third party has received their own copy of your data. If you have been contacted by one of these third parties and wish to correct or request they delete your information, please contact them directly.
                    </p>
                    <p>
                        If you wish to not have your personal information shared with third parties for the creation and display of targeted advertisements, you will need to close your account. This action may be accomplished via the settings within your account or by contacting us at privacy@tinvio.com. We do not recommend that you do this unless you plan to no longer use the Services and will have no need to interact with the settings, communications from us or through our system. Even after you opt-out of all communications, we will retain your information in accordance with this Policy, however, we will no longer use it to contact you. However, third parties who have received your information in accordance with this Policy may still use that information to contact you in accordance with their own privacy policies, but they may not use our system to do so.
                    </p>
                    <p>
                        If you would like to delete your account with us, you may do so by emailing us at privacy@tinvio.com and specifying which accounts(s) to delete.
                    </p>
                    <h3>Changes to our Privacy Policy:</h3>
                    <p>
                        Tinvio may modify or update this Privacy Policy from time to time, so please review it periodically. We may provide you additional forms of notice of modifications or updates as appropriate under the circumstances. Your continued use of Tinvio or the Service after any modification to this Privacy Policy will constitute your acceptance of such modification.
                    </p>
                    <p>This policy was last modified in Singapore on July 16, 2019.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};
