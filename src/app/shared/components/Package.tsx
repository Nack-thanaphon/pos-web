import { ReactNode } from "react";
import { CheckCircle, Package, Layers, Star } from "lucide-react";

interface PackageCardProps {
    title: string;
    features: string[]; // รายการคุณสมบัติของแพ็กเกจ
    icon: ReactNode; // รับไอคอนคอมโพเนนต์
    price: string; // ราคาของแพ็กเกจ
    className?: string; // การจัดแต่งเพิ่มเติม
}

export const PackageCard = ({ title, features, icon, price, className = "" }: PackageCardProps) => {
    return (
        <div
            className={`flex flex-col items-center p-6 border rounded-2xl shadow-sm hover:shadow-lg transition-shadow ${className}`}
        >
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 text-nowrap" />
                        {feature}
                    </li>
                ))}
            </ul>
            <div className="text-lg font-semibold text-gray-800 mb-4">{price}</div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                เลือกแผน
            </button>
        </div>
    );
};

export default function PackageComponent() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            <PackageCard
                title="แผนพื้นฐาน"
                features={["1 แท็ก NFC", "ลิงก์โปรไฟล์ที่กำหนดเอง", "จัดส่งฟรี"]}
                icon={<Package className="w-8 h-8 text-blue-600" />}
                price="599 บาท"
            />
            <PackageCard
                title="แผนมาตรฐาน"
                features={["3 แท็ก NFC", "การเพิ่มประสิทธิภาพ SEO", "การสนับสนุน Google Ads", "รายงานการวิเคราะห์รายเดือน"]}
                icon={<Layers className="w-8 h-8 text-purple-600" />}
                price="฿1,499 บาท"
            />
            <PackageCard
                title="แผนพรีเมียม"
                features={["แท็ก NFC 6", "การสนับสนุน SEO เต็มรูปแบบ", "การจัดการ Google Ads", "การวิเคราะห์และการพยากรณ์ขั้นสูง", "การสนับสนุนลำดับความสำคัญ"]}
                icon={<Star className="w-8 h-8 text-yellow-500" />}
                price="฿2,999 บาท"
            />
        </div>
    );
}