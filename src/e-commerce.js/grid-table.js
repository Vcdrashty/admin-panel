import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  card: {
    width: 250,
  },
  media: {
    height: 140,
  },
}));

export default function GridCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="data:image/jpeg;base64,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"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#1de9b6" }} label="New" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Trainers
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in White
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $80
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#ff4081" }} label="Sale" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Boots
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in Blue
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $37
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#1de9b6" }} label="New" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flat Sandals
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in White
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $70
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#ff4081" }} label="Sale" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Trainers
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in Blue
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $85
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#1de9b6" }} label="New" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flat Sandals
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in White
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $12
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#ff4081" }} label="Sale" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Trainers
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in Blue
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $76
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8PDxAPDQ8PDw8PEBEVDw8QEhUVFRUWFhUXFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGi0lHiUtKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tKy0tLS0tLS0rLS0tLS0tLS0tLf/AABEIAK8BIAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUHBgj/xABGEAACAQIDBQQGBQgIBwAAAAAAAQIDEQQSIQUGMUFRE2FxkQcyQoGhsSJSksHRFHKCssLh8PEjJENTVGKU0hUzNERzg6L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAICAgICAwAAAAAAAAAAAQIRAxIhMRNBBFEicaH/2gAMAwEAAhEDEQA/AOpWCwwKEMAAAAAABiIARIQCBjAgQDEACGIigQxAADEACGIAAYBSEMRAMiyTIsAIkhEUmRJMVgIiZJiYERMkIgzwGB3YIBgQIBgAgGDCEAAACGJkCAAIpAMQAAARQIYgABiAaEMQUgBgQIiSYgEIYAIQ2IBCZITAiIkKxFbAQwOzmQDABAMAEIYECBgACExiYCbISqJcWo+LSMHbu044ajOq7OSVoR+tJ8F4c33Hz9t3bdStWnOc5Sbk23fiy9fGz70+kLjPnrd7fPF4Rrs6kp07q9Kf0otdLcvdY7Fuvvfh8fFKD7Kta8qUnr+i/aXxM2K9GBG4XIJCACKYgEA0ADAiA2IihiY2JgIABgJiGAEQJWEAhWGDAzRgB1YAAAAIYAIBiATESEyCLEyR5nfTbSo0nRg/6SpH6X+WL0838jWONyuolupt47frbHbus4u9OlCUaevnL3u3uSORSkdFnDPGUXwkpRfvRzuvScJShLjBuLO/Ph1mOvTHDlu06UteNuhnYTFSpyUotxcWndaNNcGjWwRkN8Dzyu1dj3P9IUaijSxkle1o1rPynb5+fU6HCSaTTTTV00000+j5nzFh6ri7xeXke23W3zrYa0U1OnzpSvbxi+Xu8mb+Pt69udy6+3aUB5/ZO9+ExFln7Cf1Kn0dfzuBvozTV0011TTXmcssbPcall9JAIDLR3AQwABAAMAEAxMACkAwAQDACLEiVgsQZqALDOrBAMAEIkJgIQ0AQhDEwMPamOjh6NStPVQWi6yekV73Y5JtDFzrVJVJyzSk23/HwOl784SU8DNx1cJRqyX+VPXyvf3HLT1/jYzW3Hlv09RufhsPVp4ilPWpUTUllWeMFqp0urUldruXI8XvnuvNTlZLtoq916lWHJxfP+EzY4evKDjODcJwlmjKLs07vgzN2xtipi5U5VFGLpwUVlWVNt3nK3WT+R2vHu2X1f8AGJlrzPbkyg07NWa0afFMnUXI91j9mUq+tSLjJWXaR0fv6mpqbuU737eVunZ6+bZ5svxs5fHl2x58bPLQouw9SzN7HY1BcqtR+KS+CLY4CEfUowj3yeZ/FsY8WWN2XklYNOtpo7rpx/eeq3M3hlQqrNKXZe3G91l4Npc2tH7jTSovrDwyrX4GPOm4PPDjHVx1s1z/AJHe2ZTrXGY3G9o77SqKSUotSjJJxa4NPhYmc63E3rpRj2NWdqcneEm21GT4xfT5c+t+iI+dljcbqvVLubMYgMtAGAgGAgAYAAUACGAgGACESFYDNsOwwOrBCJCIEA2IBCJCCEJjEBPRrK0mmmmnwa5nKt8NgSwdRzgm8PO7py+q+Lg/D5HUblGOoU61OdGtHPTmrSXPxT5NdTtxZ9a554uLU3p7iakbveTdWrhW6lNuvh37aWsV0muXjwPOpn0McpZuPP5jIciFyNwvqaSJSff4lM1y08/40LGuBCdjNjUbPd7aUKCrRlOdCpOVJwrwpU6zSi5ZoOMtLSv8NTXbZqKvXrVqFKUIOWa0Y6QTel7aRuUSXJ8eXh+JnYHG01R7Cs68FGtOuuzyONSThGOWopcUnFNNdWeTLDrlt2mW5p5eq3Rq9rFXhLSrDw4Sj3nQ9zt8Z9pTw9eUXh3CEKVW2t23lzPmrad1keHxOGqyUpRsoXauqUmvDNwuU4SSpwdNv6UJOdO1/pXd2kuT0MZYTLcal0+hAPLbnb0rFxVOqlSxCV1G7alHlZvjJLj5nqDyXw6mArjuZUARuGYKkMhmHcKkmMjcLjYkAkxlAAAEZ4iQrHVggGIBCGzWbS25hsPOFOtUVOU1mWjslwvJr1V49GJNpWyEyFKrGcVKEozi+EotST96JAAgEQDE4pilJJNtpJatvRI8RvP6RKGHvTwqWJqpO8l/y4/HX5d5rHG2+Etk9vZNuN9FKLVmmrprnc8dvHuYpqVfAqz4zoffC/Lu8jnz3px2Lq5+3qQVOWZSjNxpw6WS0lLus+9nQ919841XGliH2dW6UamkadR/sy7uD8dD04zLGdpXC2Xw8JUi07NNSjo09GvcM6tvDu1Sxyc1ajiUtKltJW5TXPx4nKdo0KlKpKjKLjVhJxmmuH7u89XHyTOOeX8UboeliCpy5yFKk/5G9J2OUU9Cpx5c18RqTWlr8e5ik0+OnM55RvGthPaVKVCFKoq8ZUaLpQhGUHQl9NzVSUXqp6tNrjZcDy+IwknaTk1F6xtTyJ96fNacjaVUmnfo+4v3g2lSrqpUg60a9RwvCSg6VNRik4wfHLpdK2lzzZY9fH07S78tRQxs6c41FOUZRalmTyu/d3nYN395qeIfYTko4iPLRKatdONtM1mrx5O9jiHYNu7vN++xsMM5RcXmyONmraNW6M82eO3TGu+5hZjQ7rbdWLoptpVoJKquF+kkuj+dzc3PHllq6rtJtY5CzELiuZ7tdVmYecqzBcd16r1IkpGOmTUizNOq9MdypSJJm5kmltwuQuSua2zpsQGI7uZCY2ICurUUVKUnaMU5N9EtX8Dju2doyxGIqV3pnl9FdIrSKfekvizo++2L7PB1VezquNFeEneX/wAqRyto9v4uHvJw5b9IUoTpvPhq9bBTbu+zm1BvvhwZtMNvptajpKeGxkV9aPZzfvVvma2Tt38dDFraq6/kdeThwv15Yxyyj1FP0n4tevs5Pj6tSXzSZDE+k7FSVqWDjTfWWefw0PGzm78Sp1JNWu35nm+LGOvatjtfb2Pxa/pqrUHe0LqnDy/czTvC00rTbq88qvGHdf2p++xPKyyMemhrSaRjN6JLJFaRitEl3W4GTCrfTl04lWUXA1NxLHQd29+uydKjio2oqMYKspNyjbROafs9Wnp4cPbbb2LQx9JNuMamVOlXjZ3TWibXrRfE4XGfI9NubvlLASVGteeDk/GVFvnFc49Y+9d+bjrziiG1dmVcNUlSrRyyWqfFSXVPmjEOy43BYfH0IqeWrTklKnVi02rrSUZHMN4tg1sFO01mpu+Sqk8su5/Vl3Hfj5Zl4vtjLHXmNPKKfL7iiVFcmXtFbidLEY06HgzHq4dXu3czZoqlH+RxyjpGNltyt7iuXgZliuUEcMsXSVbsjaFTD1Y1abtKPLimuaa5pnWNj7Up4qkqkNHopxvrGXTw42fM47PTVGfsXa9TC1VUg+Gko8pLmmeTm4e39u2GenYWIxNlbSp4mmqtJ6e1FtZovo/x5mYeCyx3hDAZFIYAgujTJqRACzJNLlImmUJklI6TJmxuRBcD3POGRJCYR4X0lYn/AKej3Tqv9RftHiLHod/62bGzj9SnSivs53+seadQ+nwTWEebO/yV1JffyMes+ne2upOcveU1GMqsiiSvquDI5Sx8X3kWzjY3FTGSf8cCBNCaJZCMWWR+k0r24tvolxfy8zUiXwqy9P3BKOn1r6dF+LLU0+CtFcFx976sGuPEdU9t5uVvdV2fPs6l6mEk9Ye1BvjKH3rn4nZ6dShi6Cf0MRQqxuuDi19z+KPnadNvQ3e6m81fZ824vtKMnepRbtGXfF+zLvOeXHvzFmT12825NSherhs1aitXHjUgvD2l38Txzeh2vYW3KGMp9rh55uCnF2U4PpJcvkzW7w7n4fF3nH+r1nrnillk/wDNHn4msOezxkXH9OQSIs3e2t1sXhbudNzpr+1hecPfzj70aRdfkdvGXpn17RaE4lmUVuv3mLi1KxqkChxMuaKchxyxblZ2w9sVMLUVSDveynB+rKPR/jyOq7M2hTxFONWk7xejXOL5xfecakuZtt1dtSwteN3elUcYVI917J+Kv8zx8/FvzHbjz+q60hiQzwPQAACKAAABDEMI3VwuQuO59N5UiLYBYDWbb3Sw2LfaTU4VWopzjK17KyundM8pjfR0026WJTXSdNp+af3HRo4hWs9DGryi+EovuujrjyZyalc7jNuUYrcXGR9XsKnS1Rr9ZI19TdHHLT8nv4VKT/aOuVk+j8jBqX6fAt5siYxyme6uP0/q1T7VP/cSjuhj3/20vt0l+0dRjcUpLuJ8uS6jmcNx8e/7KEfGtTXybL6e4OMfrSw8fGs38onQpYiK4yivFr7yl4+l/eU/dKL+8nyZJqPGQ9Htb2sTh4+EZy/Asfo+qpNRxNCSla7cakdFy5nrntCmucpfm06k/wBWLJ09pwfsYn/S4n/YJyZfssjyMfR7W/xOH+zUJR9HlXniaH2Kh7ani0/YxH+nxC/ZL4VL+zVXjTqr5o18uSaeFXo8fPGU14UJy+ckWx9HVLjLE1JeFGMPnJnu1bpP7E/wISqJf2dV+FOX3j5Mv2lxjzeyt1MPhaka1KeI7SPtdrluujUUk13PQ9TR2quE/o9GtV+41OJxdRerhsTL9GkvnM1eIxuL9nBT5+vXpQ/Vub129sW6e4hNPVO/endGq2lu7hMRd1aEMz9uH9HPzXH3nkFX2qnenToYf9Nzf4fA3mzts45JLE0aNTrKE3CX2Wmn8DHWy+GplL7anH+jpavD4i3SNWH7cfwPP4vcvHw4Uo1l1p1Iy+Ds/gdOhtWi/Wk6f5ya+K0Lo1YT9WcJ+Eos18mc9rJjXFcRsTGQ9bC4iP8A6aj+KRjf8Pr/AOHr3/8ADV/A7pODXVeaMaq5LnLzZLy39NTGOMU9gY2fq4Wsl1lB015ysbjZO5k4SjVxMo2i83ZRbk21wzS4Jdyue+xdVRTcnbxZq1tCnJ2vmV9bHn5OS6dcMW7pRtGKfREinD4pT4KS9xfZnz9PSVgJqD6PyJKhJ8i9abVAZCwsiSwhfjqdoxQMr8lD8nL8dTtGYMlYLHvedG4ZmSsFgIORTVpRl60Iy8YpmS4icS7qajXS2dR/uoeVvkCwFPlCK8zYZBdmDTDWGj9WPlcf5PH6sfsxMrsw7MgxlTtyS9yJWfVl/Zh2YFGXvYshkdkHZgY+Qkol3Zj7MLpTlYZS7IGQbNKco8pbkHkGzSjJ4eQ8i6LyRdkFkJumop7NfVj9lEZYeD406b/Qj+BkZQyDdNRjxoQXCEF4RS+QSoRfGMX7jIyBlJtdMNbPo3v2VO/Xs4N/IvhQiuEYrwikXZRpEVDsx5Cyw7E0qrIGUtsFhoU2Ey6wmhoVCLconFE0P//Z"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#1de9b6" }} label="New" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Boots
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in White
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $76
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#ff4081" }} label="Sale" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flat Sandals
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in White
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $76
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#1de9b6" }} label="New" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Trainers
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in White
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $76
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#ff4081" }} label="Sale" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Boots
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in Blue
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $76
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#1de9b6" }} label="New" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Trainers
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in White
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $71
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>

          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="data:image/jpeg;base64,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"
                title="Contemplative Reptile"
              />
              <Chip style={{ backgroundColor: "#ff4081" }} label="Sale" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Flat Sandals
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Trainers in Blue
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography variant="h5" component="h2">
                $76
              </Typography>
              <Typography variant="h5" component="h2">
                4.6
              </Typography>{" "}
              <StarIcon />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
