import { useState } from 'react';
import { Box, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage, useToast } from '@chakra-ui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setFormErrors({
        name: !formData.name ? 'Name is required' : '',
        email: !formData.email ? 'Email is required' : '',
        message: !formData.message ? 'Message is required' : ''
      });
      return;
    }
    // Form submission logic goes here
    // For demonstration, we'll just display a success toast
    toast({
      title: 'Message Sent',
      description: 'Your message has been successfully sent!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    // Reset form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear form errors when user starts typing
    setFormErrors(prevState => ({
      ...prevState,
      [name]: ''
    }));
  };

  return (
    <Box borderWidth={"5px"} borderColor={"black"} borderRadius={"9px"}  backdropFilter="blur(8px)" width={"30vw"} height={"60vh"}>
      <form >
        <FormControl id="name" fontSize={"30px"}  >
          <FormLabel marginLeft={"4vh"} fontSize={"20px"}>Name</FormLabel>
          <Input type="text" borderColor={"black"} name="name" borderWidth={"medium"} width={"25vw"} marginLeft={"4vh"} value={formData.name}  />
          <FormErrorMessage>{formErrors.name}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" mt={4} >
          <FormLabel marginLeft={"4vh"}  fontSize={"20px"}>Email</FormLabel>
          <Input type="email" name="email" borderColor={"black"} value={formData.email} width={"25vw"} marginLeft={"4vh"} borderWidth={"medium"}  />
          <FormErrorMessage>{formErrors.email}</FormErrorMessage>
        </FormControl>
        <FormControl id="message" textColor={"black"} fontSize={"70px"} mt={4} isRequired isInvalid={!!formErrors.message}>
          <FormLabel marginLeft={"4vh"} fontSize={"20px"}>Message</FormLabel>
          <Textarea name="message" value={formData.message} width={"25vw"} marginLeft={"4vh"} borderColor={"black"} borderWidth={"medium"}  />
          <FormErrorMessage>{formErrors.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" mt={4} marginLeft={"11vw"}colorScheme="teal">Submit</Button>
      </form>
    </Box>
  );
};

export default ContactForm;