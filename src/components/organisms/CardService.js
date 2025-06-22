import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
} from "@mui/material";

const FlipCard = ({ title, image, shortText, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box sx={{ perspective: "1000px", width: 300, height: 380 }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          position: "relative",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            height="160"
            image={image}
            alt={title}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="h6" fontWeight={600} align="center">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {shortText}
            </Typography>
            <Button
              variant="contained"
              onClick={() => setFlipped(true)}
              sx={{ mt: 2, borderRadius: "20px", backgroundColor: "#2e7d32" }}
            >
              MORE
            </Button>
          </CardContent>
        </Card>

        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#f0f0f0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="body1">{description}</Typography>
            <Button
              variant="outlined"
              onClick={() => setFlipped(false)}
              sx={{ mt: 2, borderRadius: "20px" }}
            >
              BACK
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

const CardServices = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <FlipCard
          title="Web Development"
          image="https://cdn-icons-png.flaticon.com/512/1006/1006360.png"
          shortText="Custom websites built with modern technologies."
          description="We create high-performance websites using React, Vue, and other frameworks. Our solutions are responsive, fast, and tailored to your business goals."
        />
        <FlipCard
          title="Mobile App Development"
          image="https://usmsystems.com/wp-content/uploads/2024/12/Flutter-app-development.jpg"
          shortText="iOS & Android apps for your growing business."
          description="We build user-friendly mobile apps using React Native and Flutter, ensuring performance, scalability, and a seamless user experience across all devices."
        />
        <FlipCard
          title="API & Backend Services"
          image="https://cdn-icons-png.flaticon.com/512/9039/9039063.png"
          shortText="Powerful and secure server-side solutions."
          description="Our backend services use Node.js, Firebase, and cloud infrastructure to deliver fast, secure, and scalable APIs to power your web and mobile applications."
        />
      </Box>
    </Container>
  );
};

export default CardServices;
