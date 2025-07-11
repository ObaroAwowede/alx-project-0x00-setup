import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className = "text-xl font-extralight">Landing page</h1>
            <Card />
            <Button 
                title = "small"
                styles = "px-2 py-1 rounded-sm"
            />
            <Button 
                title = "medium"
                styles = "px-4 py-2 rounded-md"
            />styles
            <Button 
                title = "large"
                styles = "px-6 py-3 rounded-full"
            />
        </div>
    )
};

export default Landing;