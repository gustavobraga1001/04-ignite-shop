import { styled } from "@/styles";

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  padding: 10,
  border: 'none',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>
        <span>Click me</span>
      </Button>
    </>
  );
}
