// src/components/books/BookCard.jsx
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";

export default function BookCard({
  id,
  title,
  author,
  description,
  thumbnail,
}) {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/books/${id}`);

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2,
        border: "1px solid #dddddd",
        overflow: "hidden",
        transition: "all 0.22s ease-out",
        height: 290,        // 🔥 카드 세로크기 증가
        background: "white",
        "&:hover": {
          boxShadow: "0 8px 20px rgba(0,0,0,0.10)",
          transform: "translateY(-3px)",
        },
      }}
    >
      <CardActionArea onClick={handleClick} sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",       
            height: "100%",
          }}
        >
          {/* LEFT: 썸네일 (더 크게) */}
          <Box
            sx={{
              width: 160,      // 🔥 더 크게
              height: 260,     // 🔥 더 크게
              flexShrink: 0,
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: "#e4f1f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: 1.2,
            }}
          >
            {thumbnail ? (
              <CardMedia
                component="img"
                image={thumbnail}
                alt={title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Typography sx={{ color: "#1694a3", fontWeight: 600 }}>
                {title?.charAt(0) || "B"}
              </Typography>
            )}
          </Box>

          {/* RIGHT: 텍스트 영역 */}
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 0.8,
              py: 1.6,
              pr: 1.6,
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{
                lineHeight: 1.3,
                wordBreak: "keep-all",
              }}
            >
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              저자: <strong>{author}</strong>
            </Typography>

            {description && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 0.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: 1.4,
                }}
              >
                {description}
              </Typography>
            )}

            <Box sx={{ mt: "auto", textAlign: "right" }}>
              <Typography
                variant="caption"
                sx={{ color: "#1694a3", fontWeight: 600 }}
              >
                자세히 보기 →
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
