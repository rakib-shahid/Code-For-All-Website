import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
} from "@heroui/react";

function BoardCard({ image, name, role, description, link }) {
  return (
    <>
      <Link
        href={link}
        target="_blank"
        className="text-blue-500 hover:opacity-100 "
      >
        <Card className="w-80 h-[28rem] m-10 hover:scale-110 transition-transform duration-300 ease-in-out rounded-xl shadow-lg shadow-black bg-zinc-900">
          <CardHeader className="relative overflow-hidden justify-center items-center my-2">
            <Image
              src={image}
              alt={`${name} image`}
              className="rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 max-h-60 object-cover"
            />
          </CardHeader>
          <CardBody className="text-center p-4">
            <h1 className="text-purple-500 textglow font-bold m-0">{name}</h1>
            <h3 className="text-green-300 greenTextGlow">{role}</h3>
            <div className="description-container overflow-hidden max-h-16 mt-2">
              <p className="text-white textglow">{description}</p>
            </div>
          </CardBody>
          <CardFooter className="text-center"></CardFooter>
        </Card>
      </Link>
    </>
  );
}

export default BoardCard;
