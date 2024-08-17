import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const NextWorkCard = ({ img, name, description, onClick }) => {
    return (
        <Card className="py-4" onClick={onClick}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{description}</p>
                {/* <small className="text-default-500">12 Tracks</small> */}
                <h4 className="font-bold text-large">{name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={img}
                    width={270}
                    height={200}
                />
            </CardBody>
        </Card>
    );
}
