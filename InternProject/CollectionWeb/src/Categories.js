import React from 'react';
import styled from 'styled-components';
import './CategoriesStyle.scss'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  gap: 20px;
`;

const Image = styled.img`
  max-height: 100%;
  padding-bottom:20px;
  padding-top;20px;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex; 
  justify-content: flex-end; /* İçeriği yatay olarak ortala */
  align-items: center; /* İçeriği dikey olarak ortala */
  height: 100%; 
  padding-right: 10px;
  padding-top: 10px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CenterColumn = styled.figure`
  margin: 0;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopFigure = styled.figure`
  margin: 0;
`;

const BottomFigureWrapper = styled.div`
  margin: 0;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const BottomFigure = styled.figure`
  margin: 0;
`;

const NumberBadge = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  color: white;
  padding: 5px;
  border-radius: 50%;
  font-size: 12px;
`;

const LeftStyledFigure = styled.figure`
  width: 250px;
  border: 1px solid #949494;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px #949494;
  background: linear-gradient(to bottom, white, #4E5050)
`;
const StyledFigure = styled.figure`
  width: 445px;
  border: 1px solid #949494;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px #949494;
  background: linear-gradient(to bottom, white, #4E5050)
`;
const RightStyledFigure = styled.figure`
  width: 180px;
  border: 1px solid #949494;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px #949494;
  background: linear-gradient(to bottom, white, #949494, #4E5050);
`;
const CaptionContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom:10px;
`;
const Caption = styled.figcaption `
  text-align: left;
`;
    //Figcaptionlar props olarak category,item.type,count olarak  jsondata ile de çekilebilir.
    //diğer componentleri öyle tasarımladım.
const Categories = ({ images }) => {
  return (
    <GridContainer>
      <LeftColumn>
        <LeftStyledFigure>
          <NumberBadge>1</NumberBadge>
          <ImageContainer>
          <Image src={images[0]} alt="Sol Üst" style={{ width: '150px', height: '215px' }} />
          <CaptionContainer>
          <Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Weapons </figcaption>
          </Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Worefall </figcaption>
          </CaptionContainer>
          <Caption>
            <div className='count-top'>
            <figcaption className='count'> 122 </figcaption>
        </div>
        </Caption>
          </ImageContainer>
        </LeftStyledFigure>

        <LeftStyledFigure>
          <NumberBadge>2</NumberBadge>
          <ImageContainer>
          <Image src={images[1]} alt="Sol Alt 1" style={{ width: '150px', height: '215px'}} />
          <CaptionContainer>
          <Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Skulls </figcaption>
          </Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Worefall </figcaption>
          </CaptionContainer>
          <Caption>
            <div className='count-top'>
            <figcaption className='count'> 71 </figcaption>
        </div>
        </Caption>
          </ImageContainer>
        </LeftStyledFigure>
      </LeftColumn>

      <StyledFigure>
        <NumberBadge>3</NumberBadge>
        <CenterColumn>
  <StyledFigure>
    <NumberBadge>3</NumberBadge>
    <figure>
      <ImageContainer>
        <Image src={images[2]} alt="Orta" style={{ width: '150px', height: '460px',paddingBottom: '20px'}} />  
        <CaptionContainer>
          <Caption>
            <figcaption className='picture-text'> Statues </figcaption>
          </Caption>
          <figcaption className='picture-text' style={{ fontSize: '15px', color: 'white' }}> Warefall </figcaption>
        </CaptionContainer>
        <Caption>
            <div className='count-top'>
            <figcaption className='count'> 35 </figcaption>
        </div>
        </Caption>
      </ImageContainer>
    </figure>
  </StyledFigure>
</CenterColumn>

      </StyledFigure>
      <RightColumn>
        <TopFigure>
          <StyledFigure>
            <NumberBadge>4</NumberBadge>
            <ImageContainer>
            <Image src={images[3]} alt="Sağ Üst" style={{ width: '150px', height: '200px' }} />
            <CaptionContainer>
          <Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Keep </figcaption>
          </Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Waterfall </figcaption>
          </CaptionContainer>
          <Caption>
            <div className='count-top'>
            <figcaption className='count'> 413 </figcaption>
        </div>
        </Caption>
            </ImageContainer>
          </StyledFigure>
        </TopFigure>
        <BottomFigureWrapper>
          <BottomFigure>
            <RightStyledFigure>
              <NumberBadge>5</NumberBadge>
              <ImageContainer>
              <Image src={images[4]} alt="Sağ Alt 1" style={{ width: '150px', height: '230px' }} />
              <CaptionContainer>
          <Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Watches </figcaption>
          </Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Warefall </figcaption>
          </CaptionContainer>
          <Caption>
            <div className='count-top'>
            <figcaption className='count'> 98 </figcaption>
        </div>
        </Caption>
              </ImageContainer>
            </RightStyledFigure>
          </BottomFigure>
          <BottomFigure>
            <RightStyledFigure style={{ width: '250px'}} >
              <NumberBadge>6</NumberBadge>
              <ImageContainer>
              <Image src={images[5]} alt="Sağ Alt 2" style={{ width: '150px', height: '230px' }} />
              <CaptionContainer>
          <Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Furniture </figcaption>
          </Caption>
          <figcaption className='picture-text'style={{ fontSize: '15px', color: 'white' }} > Worefall </figcaption>
          </CaptionContainer>
          <Caption>
            <div className='count-top'>
            <figcaption className='count'> 812 </figcaption>
        </div>
        </Caption>
              </ImageContainer>
            </RightStyledFigure>
          </BottomFigure>
        </BottomFigureWrapper>
      </RightColumn>
    </GridContainer>
  );
};

export default Categories;
