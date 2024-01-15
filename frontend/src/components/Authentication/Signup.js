import {Button} from "@chakra-ui/button";
import {FormControl, FormLabel} from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement} from "@chakra-ui/icons";
import {VStack} from "@chakra-ui/layout";
import React, {useState} from 'react';
import {useToast} from '@chakra-ui/react';

const toast = useToast();

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const [confirmpassword, setConfirmpassword] = useState(false);
    const [pic, setPic] = useState(false);

    const handleClick = () => setShow(!show);

    const postDetails = (pics) => {
        setLoading(true);
        if(pic === undefined){
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                postion: "bottom",
            });
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png"){
            const data = new FormData();
            data.append('file', pics);
            data.append("upload_preset", "chat");
            data.append("cloud_name", 'dtfsuw6hy')

        }
    };

    const submitHandler = () => {};
}