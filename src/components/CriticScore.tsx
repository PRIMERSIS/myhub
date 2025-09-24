import { Badge } from "@chakra-ui/react";


interface Props{
    score:number;
}

const CriticScore = ({ score }: Props) => {
    let color = score > 90 ? "green" : score > 50 ? "yellow" : "purple";
    return <Badge
    variant={"subtle"}
    size={"md"}
    px={3}
    borderRadius={"30px"}
    colorPalette={color}>{score}</Badge>;
}

export default CriticScore;