import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />


      <hr />

<p>
  <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
    @{propriedades.githubUser}
  </a>
</p>
<hr />

<AlurakutProfileSidebarMenuDefault />



    </Box>
  )
}
  
export default function Home() {
  
  const [comunidades, setComunidades] = React.useState([{
    // id: '3444444444444444444444444',
    title: 'Nós amamos o Júnior',
    image: 'https://media-exp1.licdn.com/dms/image/C4D03AQH3w8MI8qTDhw/profile-displayphoto-shrink_800_800/0/1594315043715?e=1631750400&v=beta&t=s8Qsub3dPTQ2wsgVIYufRXOJLfrh592EDUyY3-qIA_4'

  }]);
  const usuarioAleatorio = 'Maryvictor';
  // const comunidades = ['Nós amamos o júnior'];
  const pessoasFavoritas = [
    'vanmtv',
    'GabrielVieiraCode',
    'phroliveira08',
    'caiquewin',
    'RafaelaMontanari',
    'josueceleste1'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">
              O que você deseja fazer?
            </h2>
            <form onSubmit={function handleCriaComunidade(e){
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              const comunidade ={
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),

              }
              const comunidadesatualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesatualizadas);
            }
             
          }>
              <div>
              <input 
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title"
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
              >
              </input>
              </div>
              <div>
                <input
                placeholder="Coloque uma URL para usarmos como capa"
                name="image"
                aria-label="Coloque uma URL para usarmos sua capa" 
                >
                </input>
              </div>
              <button>
                Criar comunidade
              </button>
            </form>

          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Amigos ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>

            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  // <li> key={itemAtual.id}
                  <li>
                    <a href={`/users/${itemAtual.title}`} >
                       <img src={itemAtual.image} /> 
                       
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}