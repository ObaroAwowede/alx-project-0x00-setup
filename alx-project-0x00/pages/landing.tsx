import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className = "text-xl font-extralight">Landing page</h1>
            <Card />
            <Button 
                title = "small"
                className = "px-2 py-1 rounded-sm"
            />
            <Button 
                title = "medium"
                className = "px-4 py-2 rounded-md"
            />
            <Button 
                title = "large"
                className = "px-6 py-3 rounded-full"
            />
        </div>
    )
};

export default Landing;