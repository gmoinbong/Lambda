import { FC } from 'react';

interface Props {
    className?: string;
}

export const DiamondBackground: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <svg width="647" height="654" viewBox="0 0 647 654" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-17.9492" y="326.951" width="477.933" height="477.933" rx="28.2072" transform="rotate(-45 -17.9492 326.951)" fill="url(#paint0_radial_1312_115571)" fillOpacity="0.15" />
                <defs>
                    <radialGradient id="paint0_radial_1312_115571" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(221.017 565.918) rotate(85.3036) scale(458.028)">
                        <stop stopColor="#DADADA" />
                        <stop offset="1" stopColor="#FAFAFA" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};
