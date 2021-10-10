import Image from "next/image";
import Theme from "../../utils/theme";
import {
  Container,
  PrimaryTitle,
  WavyText,
  SecondaryTitle,
  IconButton,
  HeaderWave,
} from "../index";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-primary py-16 px-6 lg:px-16">
          <Container className="flex flex-col justify-between items-center lg:flex-row space-y-10 lg:space-y-0">
            <div className="flex flex-col items-start space-y-8">
              <PrimaryTitle color="white">
                Try <WavyText color={Theme.colors.secondary}>our </WavyText>
                products and experience <br />
                the natural{" "}
                <WavyText color={Theme.colors.secondary}>taste </WavyText>
              </PrimaryTitle>
              <SecondaryTitle color="white">
                Experience
                <WavyText color={Theme.colors.secondary}> real-world </WavyText>
                pro
                <WavyText color={Theme.colors.secondary}> chefs </WavyText>
                from <br /> all
                <WavyText color={Theme.colors.secondary}> around </WavyText> the
                world.
              </SecondaryTitle>
              <IconButton
                variant="primaryHover"
                title={"Our Products"}
                icon={"/steak.svg"}
                className="self-start"
              />
            </div>
            <div className="bg-white rounded-lg p-2">
              <Image
                src="/header.svg"
                alt="Header Illustration Naturaltaste"
                width="700"
                height="400"
              />
            </div>
          </Container>
        </div>
        <HeaderWave />
      </header>
    </>
  );
};

export default Header;
