import { Card,Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root width={"300px"} borderRadius={20} overflow={"hidden"}>
      <Skeleton height={"200px"}/>
        <Card.Body>
          <SkeletonText />
        </Card.Body>
     
    </Card.Root>
  )
}

export default GameCardSkeleton