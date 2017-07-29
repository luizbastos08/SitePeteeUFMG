var dicMaterias = {
	dcc003:{estado:"nok", periodo:"p1", nome:"DCC003-Algoritmos e Estruturas de Dados I (4 Créditos)<BR>", requisitos:"", ementa:"Histórico do desenvolvimento de computadores e das linguagens de computação. Fases do desenvolvimento de programas. Desenvolvimento de programas em uma linguagem de alto nível: dados, comandos, ferramentas de modularização, metodologias de desenvolvimento", trava:"DCC004"},
	eee001:{estado:"nok", periodo:"p1", nome:"EEE001-Introdução à Engenharia Elétrica (1 Crédito)<BR>", requisitos:"", ementa:"Apresentação do curso de Engenharia Elétrica: métodos e técnicas fundamentais, áreas de formação e de atuação. Planejamento individual e programação do perfil profissional. Normas Gerais da Graduação.", trava:""},
	eee021:{estado:"nok", periodo:"p1", nome:"EEE021-Introdução ao Projeto de Engenharia (2 Créditos)<BR>", requisitos:"", ementa:"Apresentação da área de Engenharia Elétrica. Realização de atividades visando o desenvolvimento científico e a inovação tecnológica. Introdução ao projeto de engenharia. Metodologias de elaboração e gerenciamento de projetos. Elaboração de relatórios e artigos técnicos e de monografias.", trava:""},
	fis054:{estado:"nok", periodo:"p1", nome:"FIS054-Introdução à Física Experimental (3 Créditos)<BR>", requisitos:"", ementa:"Utilização de aparelhos de medida. Obtenção, tratamento e análise de dados obtidos em experimentos de Física. Apresentação de resultados.", trava:"FIS060"},
	mat001:{estado:"nok", periodo:"p1", nome:"MAT001-Cálculo Diferencial e Integral I (6 Créditos)<BR>", requisitos:"", ementa:"Integrais impróprias: seqüências séries numéricas. Funções de R em R. Derivadas. Integrais. Aplicações. \"Regras de L’Hospital\".", trava:"FIS065,FIS066,MAT039,EST045"},
	mat038:{estado:"nok", periodo:"p1", nome:"MAT038-Geometria Analítica e Álgebra Linear (4 Créditos)<BR>", requisitos:"", ementa:"Álgebra vetorial. Retas e planos. Matrizes, sistemas lineares e determinantes. Espaço vetorial Rn. Autovalores e autovetores de matrizes. Diagonalização de matrizes simétricas.", trava:"MAT039"},
	dcc004:{estado:"nok", periodo:"p2", nome:"DCC004-Algoritmos e Estrutura de dados II (4 Créditos)<BR>", requisitos:"DCC003", ementa:"Programação estruturada e linguagem de programação modular. Introdução às técnicas de análise de algoritmos. Estruturas de dados estáticas e dinâmicas na memória principal.", trava:""},
	dcc033:{estado:"nok", periodo:"p2", nome:"DCC033-Análise Numérica (4 Créditos)<BR>", requisitos:"", ementa:"Números aproximados: erro, estabilidade e convergência. Sistemas lineares; inversão de matrizes. Zeros de funções; interseção de curvas. Interpolação. Métodos de integração. Resolução numérica de equações diferenciais ordinárias de primeira ordem. Autovalores e autovetores.", trava:""},
	fch001:{estado:"nok", periodo:"p2", nome:"FCH001-Formação em Ciência Humanas I (4 Créditos)<BR>", requisitos:"", ementa:"Conteúdo variável.", trava:""},
	fis060:{estado:"nok", periodo:"p2", nome:"FIS060-Física Experimental EO (3 Créditos)<BR>", requisitos:"FIS054", ementa:"Experimentos de eletromagnetismo, óptica e ondas.", trava:""},
	fis065:{estado:"nok", periodo:"p2", nome:"FIS065-Fundamentos de Mecânica (4 Créditos)<BR>", requisitos:"MAT001", ementa:"Cinemática e Dinâmica da Partícula. Sistemas de Partículas. Cinemática e Dinâmica da Rotação. Leis de Conservação da Energia e dos Momentos Linear e Angular. Equilíbrio de Corpos Rígidos. Estática e Dinâmica dos Fluidos.", trava:"FIS069"},
	fis066:{estado:"nok", periodo:"p2", nome:"FIS066-Fundamentos da Termodinâmica (2 Créditos)<BR>", requisitos:"MAT001", ementa:"Calor e Temperatura. Leis da Termodinâmica.", trava:"EQM044"},
	mat039:{estado:"nok", periodo:"p2", nome:"MAT039-Cálculo Diferencial e Integral II (4 Créditos)<BR>", requisitos:"MAT001, MAT038", ementa:"Coordenadas polares. Cônicas. Séries. Série e fórmula de Taylor. Diferenciabilidade de funções de várias variáveis.", trava:"MAT002,MAT015,MAT016"},
	ele064:{estado:"nok", periodo:"p3", nome:"ELE064-Análise de Circuitos Elétricos I (2 Créditos)<BR>", requisitos:"", ementa:"Fontes de tensão e corrente dependentes e independentes. Leis fundamentais de circuitos. Circuitos resistivos. Métodos de análise de circuitos. Teoremas de rede. Circuitos com aplificador operacional ideal.", trava:"ELE028,ELE065"},
	elt083:{estado:"nok", periodo:"p3", nome:"ELT083-Sistemas Digitais (3 Créditos)<BR>", requisitos:"", ementa:"Sistemas de numeração. Álgebra Booleana. Portas lógicas. Circuitos combinacionais: análise, síntese e técnicas de minimização. Circuitos seqüenciais síncronos e assíncronos. Análise, síntese e técnicas de minimização de circuitos seqüenciais. Famílias de circuitos lógicos. Dispositivos lógicos programáveis. \"Gate arrays\". Análise e projeto de sistemas digitais.", trava:"ELT029,ELT005"},
	eqm044:{estado:"nok", periodo:"p3", nome:"EQM044-Fenômenos de Transporte (3 Créditos)<BR>", requisitos:"FIS066", ementa:"Mecânica dos fluidos: bombas, dutos e escoamento. Transmissão de calor: condução, convecção, irradiação; trocadores de calor.", trava:""},
	fis069:{estado:"nok", periodo:"p3", nome:"FIS069-Fundamentos de Eletromagnetismo (4 Créditos)<BR>", requisitos:"FIS065", ementa:"Eletrostática. Forças proporcionais ao inverso do quadrado da distância. Corrente elétrica. Campo Magnético. Eletrodinâmica clássica.", trava:"FIS086,ELE001"},
	mat002:{estado:"nok", periodo:"p3", nome:"MAT002-Cálculo Diferencial e Integral III (4 Créditos)<BR>", requisitos:"MAT039", ementa:"Integração de função de duas ou mais variáveis. Integrais de linha e de superfície. Teoremas de Gauss e de Stokes.", trava:""},
	mat015:{estado:"nok", periodo:"p3", nome:"MAT015-Equações Diferenciais A (4 Créditos)<BR>", requisitos:"MAT039", ementa:"Equações diferenciais de 1ª e 2ª ordens. Sistemas lineares de equações diferenciais lineares. Solução em séries de potência. Transformada de Laplace.", trava:"ELE065,ELT088,FIS086"},
	ele028:{estado:"nok", periodo:"p4", nome:"ELE028-Laboratório de Circuito Elétricos I (2 Créditos)<BR>", requisitos:"ELE064", ementa:"Organização de laboratórios. Segurança em laboratórios. Medição de grandezas elétricas. Experimentos básicos com elementos de circuitos, circuitos resistivos, circuitos com fontes dependentes, circuitos com capacitores e indutores, circuitos em regime transitório e em regime permanente senoidal.", trava:"ELE031"},
	ele065:{estado:"nok", periodo:"p4", nome:"ELE065-Análise de Circuito Elétricos II (2 Créditos)<BR>", requisitos:"ELE064, MAT015", ementa:"Indutância, capacitância e indutância mútua. Circuitos de 1a. Ordem (RC, RL e outors circuitos). Circuitos de 2a. Ordem (RLC série, RLC paralelo e outros circuitos). Excitaçãos enoidal e fasores. Análise em regime permanente senoidal. Potência em regime permanente senoidal.", trava:"ELE066,ELT084,ELE029,ELE033,ELE034"},
	elt029:{estado:"nok", periodo:"p4", nome:"ELT029-Laboratório de Sistemas Digitais (2 Créditos)<BR>", requisitos:"ELT083", ementa:"Experimentos de laboratório com a finalidade de integrar conhecimentos nos seguintes assuntos: circuitos lógicos. Circuitos combinacionais: técnicas de minimização, análise e síntese. Circuitos seqüenciais síncronos e assíncronos: técnicas de minimização, análise e síntese. Dispositivos lógicos programáveis: \"gate arrays\". Análise e projeto de sistemas digitais.", trava:""},
	elt088:{estado:"nok", periodo:"p4", nome:"ELT088-Análise de Sistemas Dinâmicos Lineares (4 Créditos)<BR>", requisitos:"MAT015", ementa:"Sistemas lineares invariantes no tempo. Análise de Fourier para sinais e sistemas de tempo contínuo. Análise de Fourier para sinais e sistemas de tempo discreto. Amostragem de sinais. Caracterização de sistemas por meio da transformada de Laplace. A transformada Z. Representação e análise de sistemas no espaço de estados.", trava:"ELE031,ELE066,ELT035,ELE042"},
	est045:{estado:"nok", periodo:"p4", nome:"EST045-Probabilidade e Processos Estocásticos (4 Créditos)<BR>", requisitos:"MAT001", ementa:"Probabilidade. Variáveis e vetores aleatórios. Esperança matemática e funções características. Distribuição e esperança condicional. Convergência. Introdução a processos estocásticos.", trava:""},
	fis086:{estado:"nok", periodo:"p4", nome:"FIS086-Fundamentos de Oscilações, Ondas e Óptica. (4 Créditos)<BR>", requisitos:"FIS069", ementa:"Oscilações e Ondas Mecânicas e Eletromagnéticas. Som. Óptica.", trava:"FIS088"},
	mat016:{estado:"nok", periodo:"p4", nome:"MAT016-Equações Diferenciais B (4 Créditos)<BR>", requisitos:"MAT039", ementa:"Séries integrais de Fourier. Equações diferenciais parciais", trava:"ELE001"},
	ele001:{estado:"nok", periodo:"p5", nome:"ELE001-Eletromagnetismo (4 Créditos)<BR>", requisitos:"FIS069, MAT016", ementa:"Campos eletromagnéticos estacionários. Campos eletromagnéticos variáveis com o tempo. Ondas e linhas.", trava:"ELE032,ELE033,ELE034,ELT086"},
	ele031:{estado:"nok", periodo:"p5", nome:"ELE031-Laboratório de Circuitos Elétricos II (2 Créditos)<BR>", requisitos:"ELT088, ELE028", ementa:"Experimentos e técnicas de medição em: circuitos trifásicos equilibrados; resposta em freqüência de circuitos; circuitos submetidos a formas de onda não senoidais; projeto de filtros.", trava:""},
	ele066:{estado:"nok", periodo:"p5", nome:"ELE066-Análise de Circuitos Elétricos III (2 Créditos)<BR>", requisitos:"ELE065, ELT088", ementa:"Análise circuitos utilizando a Transformada de Laplace. Análise de circuitos utilizando Quadripólos e Séries de Fourier. Resposta em frequência de circuitos.", trava:""},
	elt005:{estado:"nok", periodo:"p5", nome:"ELT005-Sistemas Processadores e Periféricos (5 Créditos)<BR>", requisitos:"ELT083", ementa:"Arquitetura de microprocessadores: unidade de controle, memória, entrada e saída. Programação de microprocessadores: tipos e formatos de instruções, modos de endereçamento, linguagens Assembly e C. Dispositivos periféricos, interrupção, acesso direto à memória. Barramentos-padrão. Ferramentas para análise, desenvolvimento e depuração. Microprocessadores comerciais. Projetos de aplicações com microprocessadores e interfaces de E/S.", trava:""},
	elt035:{estado:"nok", periodo:"p5", nome:"ELT035-Controle de Sistemas Lineares (4 Créditos)<BR>", requisitos:"ELT088", ementa:"Representação e análise de sistemas dinâmicos lineares no tempo e na freqüência. Lugar das raízes e resposta em freqüência. Projeto de sistemas de controle de tempo contínuo. Introdução ao controle digital.", trava:""},
	elt084:{estado:"nok", periodo:"p5", nome:"ELT084-Dispositivos e Circuitos Eletrônicos Básicos (4 Créditos)<BR>", requisitos:"ELE065", ementa:"Introdução a eletrônica. Circuitos eletrônicos com amplificadores operacionais ideais. Junção PN. Diodos retificadores. Diodo zener. Transistores de efeito de campo (FET) e transistores bipolares (BJT): características, modelo de transistor em baixa e alta frequência, polarização, configuração de amplificadores. Modelos em pequenos sinais: operação e análise de amplificadoes de único estágio. Parâmetros: impedância de entrada e saída, ganhos de tensão, de corrente e de transcondutância, Funcionamento como chave. Conversores A/D e D/A: conceitos básicos.", trava:"ELT085,ELT089"},
	fis088:{estado:"nok", periodo:"p5", nome:"FIS088-Fundamentos de Física Quântica (2 Créditos)<BR>", requisitos:"FIS086", ementa:"Origens da Física Quântica. Propriedades ondulatórias de matéria. Equação de Schrödinger e aplicações. Elétrons em sólidos.", trava:""},
	ele029:{estado:"nok", periodo:"p6", nome:"ELE029-Sistemas de Medição (4 Créditos)<BR>", requisitos:"ELE065", ementa:"Métodos e técnicas para medição de grandezas elétricas. Circuitos para medição. Componentes, instrumentos e sistemas de medição. Qualidade de medição. Medição de grandezas físicas por meios elétricos.", trava:""},
	ele032:{estado:"nok", periodo:"p6", nome:"ELE032-Teoria dos Materiais (4 Créditos)<BR>", requisitos:"ELE001", ementa:"Teoria quântica e mecânica ondulatória básica. Materiais elétricos: condutores, dielétricos e semicondutores. Materiais magnéticos. Materiais óticos. Características mecânicas.", trava:""},
	ele033:{estado:"nok", periodo:"p6", nome:"ELE033-Circuitos Polifásicos e Magnéticos (4 Créditos)<BR>", requisitos:"ELE065, ELE001", ementa:"Circuitos magneticamente acoplados. Transformadores. Circuitos polifásicos equilibrados e desequilibrados. Transformações de coordenadas. Circuitos a parâmetros distribuídos.", trava:""},
	ele034:{estado:"nok", periodo:"p6", nome:"ELE034-Conversão da Energia (4 Créditos)<BR>", requisitos:"ELE065, ELE001", ementa:"Energia e desenvolvimento. Formas de conversão da energia. Princípios de conversão eletromecânica da energia. Máquinas de corrente contínua, síncronas e de indução.", trava:"ELE035"},
	elt085:{estado:"nok", periodo:"p6", nome:"ELT085-Circuitos Eletrônicos Analógicos (4 Créditos)<BR>", requisitos:"ELT084", ementa:"Amplificadores operacionais integrados. Amplificadores com um e com dois transistores. Amplificador par diferencial. Amplificadoes de múltiplos estágios. Amplificadores com realimentação negativa. Estudo de estabilidade de amplificadores. Compensção em frequência. Estágio de saída de amplificadores de potência: classes A, B, A-B, D e G.", trava:"ELT090"},
	elt086:{estado:"nok", periodo:"p6", nome:"ELT086-Teoria de Comunicações (3 Créditos)<BR>", requisitos:"ELE001", ementa:"Conceitos básicos em análise de sinais. Modulação em amplitude. Modulação angular. Modulação por pulsos. Multiplexação digital. Princípios de codificação, equalização e sincronização.", trava:"ELT087"},
	elt089:{estado:"nok", periodo:"p6", nome:"ELT089-Laboratório de Circuitos Eletrônicos I (2 Créditos)<BR>", requisitos:"ELT084", ementa:"Princípios de operação e utilização de instrumentos de medição em laboratório. Analise e projetos de circuitos utilizando: amplificadores operacionais; diodos retificadores e diodo zener; transistores bipolares; transistores MOSFETs. Análise e projeto de circuitos utilizando transistores operando como amplificadores e como chaves estáticas. Amplificador linear.", trava:""},
	ele035:{estado:"nok", periodo:"p7", nome:"ELE035-Laboratório de Conversão da Energia (2 Créditos)<BR>", requisitos:"ELE034", ementa:"Experimentos em transformadores, máquinas de corrente contínua, síncronas e de indução.", trava:""},
	ele042:{estado:"nok", periodo:"p7", nome:"ELE042-Processamentos de Sinais (4 Créditos)<BR>", requisitos:"ELT088", ementa:"Representação não-paramétrica de sistemas lineares invariantes no tempo. Dualidade tempo-freqüência: representação de sinais periódicos por séries de Fourier, transformada de Fourier contínua. Filtragem. Modulação. Amostragem e reconstrução. Interpolação e decimação. Transformada de Fourier discreta. Algoritmos rápidos. Princípios de estimação espectral. Projeto de filtros analógicos e digitais.", trava:""},
	elt087:{estado:"nok", periodo:"p7", nome:"ELT087-Laboratório de Comunicações (2 Créditos)<BR>", requisitos:"ELT086", ementa:"Experimentos em laboratório abordando teoria de comunicações: conceitos básicos em análise de sinais; modulação em amplitude; modulação angular; modulação por pulsos; multiplexação digital; princípios de codificação, equalização e sincronização.", trava:""},
	elt090:{estado:"nok", periodo:"p7", nome:"ELT090-Laboratório de Circuitos Eletrônicos II (2 Créditos)<BR>", requisitos:"ELT085", ementa:"Par diferencial. Espelho de corrente. Ganhos diferencial e de modo comum. Taxa de rejeição de modo comum (CMRR). Resposta em frequência. Estabilidade. Amplificadores realimentados. Circuitos avançados com amplificadores operacionais. Filtros ativos básicos. Circuitos geradores de forma de onda. Osciladores. Multivibradores. Circuito integrado 555.", trava:""},
	fch002:{estado:"nok", periodo:"p8", nome:"FCH002-Formação em Ciência Humanas II (4 Créditos)<BR>", requisitos:"", ementa:"Conteúdo variável.", trava:""},
	eee022:{estado:"nok", periodo:"p9", nome:"EEE022-Gestão de Projetos Tecnológicos (2 Créditos)<BR>", requisitos:"", ementa:"Preparação do trabalho final de curso. Realização de projeto de engenharia. Metodologias de elaboração e gerenciamento de projetos. Elaboração de relatórios e artigos técnicos e de monografias.", trava:"EEE023"},
	eee023:{estado:"nok", periodo:"p10", nome:"EEE023-Trabalho de Conclusão de Curso (4 Créditos)<BR>", requisitos:"EEE022", ementa:"Realização do Trabalho de Conclusão de Curso. Conteúdo variável.", trava:""}
};

var dicPeriodos = {
	p1:{materias:"dcc003,eee001,eee021,fis054,mat001,mat038", trava:"p2"},
	p2:{materias:"dcc004,dcc033,fch001,fis060,fis065,fis066,mat039", trava: "p3"},
	p3:{materias:"ele064,elt083,eqm044,fis069,mat002,mat015", trava: "p4"},
	p4:{materias:"ele028,ele065,elt029,elt088,est045,fis086,mat016", trava: "p5"},
	p5:{materias:"ele001,ele031,ele066,elt005,elt035,elt084,fis088", trava: "p6"},
	p6:{materias:"ele029,ele032,ele033,ele034,elt085,elt086,elt089", trava: "p7"},
	p7:{materias:"ele035,ele042,elt087,elt090", trava: "p8"},
	p8:{materias:"fch002", trava: "p9"},
	p9:{materias:"eee022", trava: "p10"},
	p10:{materias:"eee023", trava: ""}
}