PGDMP     +    5                {            fitness_club    15.1    15.1 l    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16742    fitness_club    DATABASE     �   CREATE DATABASE fitness_club WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE fitness_club;
                postgres    false            �            1259    16805    access_levels    TABLE     �   CREATE TABLE public.access_levels (
    "AccessLevelId" integer NOT NULL,
    "AccessLevelName" character varying(50) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public.access_levels;
       public         heap    postgres    false            �            1259    16804    access_levels_AccessLevelId_seq    SEQUENCE     �   CREATE SEQUENCE public."access_levels_AccessLevelId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."access_levels_AccessLevelId_seq";
       public          postgres    false    225            �           0    0    access_levels_AccessLevelId_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."access_levels_AccessLevelId_seq" OWNED BY public.access_levels."AccessLevelId";
          public          postgres    false    224            �            1259    16812    brands    TABLE     �   CREATE TABLE public.brands (
    "BrandId" integer NOT NULL,
    "BrandName" character varying(50) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.brands;
       public         heap    postgres    false            �            1259    16811    brands_BrandId_seq    SEQUENCE     �   CREATE SEQUENCE public."brands_BrandId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."brands_BrandId_seq";
       public          postgres    false    227            �           0    0    brands_BrandId_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."brands_BrandId_seq" OWNED BY public.brands."BrandId";
          public          postgres    false    226            �            1259    16834    card_tariffs    TABLE     	  CREATE TABLE public.card_tariffs (
    "TariffId" integer NOT NULL,
    "TariffName" character varying(50) NOT NULL,
    "TariffCost" double precision NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.card_tariffs;
       public         heap    postgres    false            �            1259    16833    card_tariffs_TariffId_seq    SEQUENCE     �   CREATE SEQUENCE public."card_tariffs_TariffId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."card_tariffs_TariffId_seq";
       public          postgres    false    231            �           0    0    card_tariffs_TariffId_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."card_tariffs_TariffId_seq" OWNED BY public.card_tariffs."TariffId";
          public          postgres    false    230            �            1259    16819 
   club_cards    TABLE     �   CREATE TABLE public.club_cards (
    "NumberCard" integer NOT NULL,
    "CardTariff" integer NOT NULL,
    "CardExpirationDate" date NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.club_cards;
       public         heap    postgres    false            �            1259    16818    club_cards_NumberCard_seq    SEQUENCE     �   CREATE SEQUENCE public."club_cards_NumberCard_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."club_cards_NumberCard_seq";
       public          postgres    false    229            �           0    0    club_cards_NumberCard_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."club_cards_NumberCard_seq" OWNED BY public.club_cards."NumberCard";
          public          postgres    false    228            �            1259    16759 	   employees    TABLE     j  CREATE TABLE public.employees (
    "EmployeesId" integer NOT NULL,
    "Position" integer NOT NULL,
    "Education" character varying,
    "Specialization" character varying,
    "EmployeeAccount" integer NOT NULL,
    "PlaceOfResidence" character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.employees;
       public         heap    postgres    false            �            1259    16758    employees_EmployeesId_seq    SEQUENCE     �   CREATE SEQUENCE public."employees_EmployeesId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."employees_EmployeesId_seq";
       public          postgres    false    215            �           0    0    employees_EmployeesId_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."employees_EmployeesId_seq" OWNED BY public.employees."EmployeesId";
          public          postgres    false    214            �            1259    16777    group_workouts    TABLE     ]  CREATE TABLE public.group_workouts (
    "WorkoutId" integer NOT NULL,
    "WorkoutName" character varying(50) NOT NULL,
    "Instructor" integer NOT NULL,
    "CommercialClass" boolean NOT NULL,
    "WorkoutDescription" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.group_workouts;
       public         heap    postgres    false            �            1259    16776    group_workouts_WorkoutId_seq    SEQUENCE     �   CREATE SEQUENCE public."group_workouts_WorkoutId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public."group_workouts_WorkoutId_seq";
       public          postgres    false    219            �           0    0    group_workouts_WorkoutId_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public."group_workouts_WorkoutId_seq" OWNED BY public.group_workouts."WorkoutId";
          public          postgres    false    218            �            1259    16841    positions_employees    TABLE       CREATE TABLE public.positions_employees (
    "PositionId" integer NOT NULL,
    "PositionName" character varying(50) NOT NULL,
    "Salary" double precision NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 '   DROP TABLE public.positions_employees;
       public         heap    postgres    false            �            1259    16840 "   positions_employees_PositionId_seq    SEQUENCE     �   CREATE SEQUENCE public."positions_employees_PositionId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public."positions_employees_PositionId_seq";
       public          postgres    false    233            �           0    0 "   positions_employees_PositionId_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public."positions_employees_PositionId_seq" OWNED BY public.positions_employees."PositionId";
          public          postgres    false    232            �            1259    16768    products    TABLE     �  CREATE TABLE public.products (
    "ProductId" integer NOT NULL,
    "ProductName" character varying(255) NOT NULL,
    "BrandName" integer NOT NULL,
    "Cost" double precision NOT NULL,
    "Description" character varying,
    "Supplier" integer NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16767    products_ProductId_seq    SEQUENCE     �   CREATE SEQUENCE public."products_ProductId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."products_ProductId_seq";
       public          postgres    false    217            �           0    0    products_ProductId_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."products_ProductId_seq" OWNED BY public.products."ProductId";
          public          postgres    false    216            �            1259    16791    services    TABLE     /  CREATE TABLE public.services (
    "ServicesId" integer NOT NULL,
    "ServicesName" character varying(50) NOT NULL,
    "ServicesPrice" double precision NOT NULL,
    "Instructor" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.services;
       public         heap    postgres    false            �            1259    16790    services_ServicesId_seq    SEQUENCE     �   CREATE SEQUENCE public."services_ServicesId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."services_ServicesId_seq";
       public          postgres    false    221            �           0    0    services_ServicesId_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."services_ServicesId_seq" OWNED BY public.services."ServicesId";
          public          postgres    false    220            �            1259    16848 	   suppliers    TABLE     <  CREATE TABLE public.suppliers (
    "SupplierId" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "LastName" character varying(50) NOT NULL,
    "OrganizationName" character varying(50) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.suppliers;
       public         heap    postgres    false            �            1259    16847    suppliers_SupplierId_seq    SEQUENCE     �   CREATE SEQUENCE public."suppliers_SupplierId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."suppliers_SupplierId_seq";
       public          postgres    false    235            �           0    0    suppliers_SupplierId_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."suppliers_SupplierId_seq" OWNED BY public.suppliers."SupplierId";
          public          postgres    false    234            �            1259    16798    training_rooms    TABLE     �   CREATE TABLE public.training_rooms (
    "RoomId" integer NOT NULL,
    "RoomName" character varying(50) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.training_rooms;
       public         heap    postgres    false            �            1259    16797    training_rooms_RoomId_seq    SEQUENCE     �   CREATE SEQUENCE public."training_rooms_RoomId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."training_rooms_RoomId_seq";
       public          postgres    false    223            �           0    0    training_rooms_RoomId_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."training_rooms_RoomId_seq" OWNED BY public.training_rooms."RoomId";
          public          postgres    false    222            �            1259    16879    users    TABLE     /  CREATE TABLE public.users (
    "UserId" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "LastName" character varying(50) NOT NULL,
    "Surname" character varying(50) NOT NULL,
    "Phone" character varying(50),
    "Email" character varying(50) NOT NULL,
    "Password" character varying(255) NOT NULL,
    "Login" character varying(50) NOT NULL,
    "ClubCard" integer,
    "Level_security" integer NOT NULL,
    "Date_of_birth" date,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16878    users_UserId_seq    SEQUENCE     �   CREATE SEQUENCE public."users_UserId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."users_UserId_seq";
       public          postgres    false    237            �           0    0    users_UserId_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."users_UserId_seq" OWNED BY public.users."UserId";
          public          postgres    false    236            �            1259    24581    workout_schedules    TABLE     5  CREATE TABLE public.workout_schedules (
    "ScheduleId" integer NOT NULL,
    "Day" integer NOT NULL,
    "Workout" integer NOT NULL,
    "Time" character varying(5) NOT NULL,
    "TrainingRoom" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 %   DROP TABLE public.workout_schedules;
       public         heap    postgres    false            �            1259    24580     workout_schedules_ScheduleId_seq    SEQUENCE     �   CREATE SEQUENCE public."workout_schedules_ScheduleId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public."workout_schedules_ScheduleId_seq";
       public          postgres    false    239            �           0    0     workout_schedules_ScheduleId_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public."workout_schedules_ScheduleId_seq" OWNED BY public.workout_schedules."ScheduleId";
          public          postgres    false    238            �           2604    16808    access_levels AccessLevelId    DEFAULT     �   ALTER TABLE ONLY public.access_levels ALTER COLUMN "AccessLevelId" SET DEFAULT nextval('public."access_levels_AccessLevelId_seq"'::regclass);
 L   ALTER TABLE public.access_levels ALTER COLUMN "AccessLevelId" DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    16815    brands BrandId    DEFAULT     t   ALTER TABLE ONLY public.brands ALTER COLUMN "BrandId" SET DEFAULT nextval('public."brands_BrandId_seq"'::regclass);
 ?   ALTER TABLE public.brands ALTER COLUMN "BrandId" DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    16837    card_tariffs TariffId    DEFAULT     �   ALTER TABLE ONLY public.card_tariffs ALTER COLUMN "TariffId" SET DEFAULT nextval('public."card_tariffs_TariffId_seq"'::regclass);
 F   ALTER TABLE public.card_tariffs ALTER COLUMN "TariffId" DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    16822    club_cards NumberCard    DEFAULT     �   ALTER TABLE ONLY public.club_cards ALTER COLUMN "NumberCard" SET DEFAULT nextval('public."club_cards_NumberCard_seq"'::regclass);
 F   ALTER TABLE public.club_cards ALTER COLUMN "NumberCard" DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    16762    employees EmployeesId    DEFAULT     �   ALTER TABLE ONLY public.employees ALTER COLUMN "EmployeesId" SET DEFAULT nextval('public."employees_EmployeesId_seq"'::regclass);
 F   ALTER TABLE public.employees ALTER COLUMN "EmployeesId" DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    16780    group_workouts WorkoutId    DEFAULT     �   ALTER TABLE ONLY public.group_workouts ALTER COLUMN "WorkoutId" SET DEFAULT nextval('public."group_workouts_WorkoutId_seq"'::regclass);
 I   ALTER TABLE public.group_workouts ALTER COLUMN "WorkoutId" DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    16844    positions_employees PositionId    DEFAULT     �   ALTER TABLE ONLY public.positions_employees ALTER COLUMN "PositionId" SET DEFAULT nextval('public."positions_employees_PositionId_seq"'::regclass);
 O   ALTER TABLE public.positions_employees ALTER COLUMN "PositionId" DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    16771    products ProductId    DEFAULT     |   ALTER TABLE ONLY public.products ALTER COLUMN "ProductId" SET DEFAULT nextval('public."products_ProductId_seq"'::regclass);
 C   ALTER TABLE public.products ALTER COLUMN "ProductId" DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16794    services ServicesId    DEFAULT     ~   ALTER TABLE ONLY public.services ALTER COLUMN "ServicesId" SET DEFAULT nextval('public."services_ServicesId_seq"'::regclass);
 D   ALTER TABLE public.services ALTER COLUMN "ServicesId" DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    16851    suppliers SupplierId    DEFAULT     �   ALTER TABLE ONLY public.suppliers ALTER COLUMN "SupplierId" SET DEFAULT nextval('public."suppliers_SupplierId_seq"'::regclass);
 E   ALTER TABLE public.suppliers ALTER COLUMN "SupplierId" DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    16801    training_rooms RoomId    DEFAULT     �   ALTER TABLE ONLY public.training_rooms ALTER COLUMN "RoomId" SET DEFAULT nextval('public."training_rooms_RoomId_seq"'::regclass);
 F   ALTER TABLE public.training_rooms ALTER COLUMN "RoomId" DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    16882    users UserId    DEFAULT     p   ALTER TABLE ONLY public.users ALTER COLUMN "UserId" SET DEFAULT nextval('public."users_UserId_seq"'::regclass);
 =   ALTER TABLE public.users ALTER COLUMN "UserId" DROP DEFAULT;
       public          postgres    false    237    236    237            �           2604    24584    workout_schedules ScheduleId    DEFAULT     �   ALTER TABLE ONLY public.workout_schedules ALTER COLUMN "ScheduleId" SET DEFAULT nextval('public."workout_schedules_ScheduleId_seq"'::regclass);
 M   ALTER TABLE public.workout_schedules ALTER COLUMN "ScheduleId" DROP DEFAULT;
       public          postgres    false    238    239    239            p          0    16805    access_levels 
   TABLE DATA           e   COPY public.access_levels ("AccessLevelId", "AccessLevelName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   Ԋ       r          0    16812    brands 
   TABLE DATA           R   COPY public.brands ("BrandId", "BrandName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   <�       v          0    16834    card_tariffs 
   TABLE DATA           h   COPY public.card_tariffs ("TariffId", "TariffName", "TariffCost", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   ��       t          0    16819 
   club_cards 
   TABLE DATA           p   COPY public.club_cards ("NumberCard", "CardTariff", "CardExpirationDate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    229   �       f          0    16759 	   employees 
   TABLE DATA           �   COPY public.employees ("EmployeesId", "Position", "Education", "Specialization", "EmployeeAccount", "PlaceOfResidence", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   b�       j          0    16777    group_workouts 
   TABLE DATA           �   COPY public.group_workouts ("WorkoutId", "WorkoutName", "Instructor", "CommercialClass", "WorkoutDescription", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �       x          0    16841    positions_employees 
   TABLE DATA           o   COPY public.positions_employees ("PositionId", "PositionName", "Salary", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    233   �       h          0    16768    products 
   TABLE DATA           �   COPY public.products ("ProductId", "ProductName", "BrandName", "Cost", "Description", "Supplier", img, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   ��       l          0    16791    services 
   TABLE DATA           y   COPY public.services ("ServicesId", "ServicesName", "ServicesPrice", "Instructor", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   a�       z          0    16848 	   suppliers 
   TABLE DATA           s   COPY public.suppliers ("SupplierId", "Name", "LastName", "OrganizationName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    235   ͛       n          0    16798    training_rooms 
   TABLE DATA           X   COPY public.training_rooms ("RoomId", "RoomName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   ��       |          0    16879    users 
   TABLE DATA           �   COPY public.users ("UserId", "Name", "LastName", "Surname", "Phone", "Email", "Password", "Login", "ClubCard", "Level_security", "Date_of_birth", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237   B�       ~          0    24581    workout_schedules 
   TABLE DATA           }   COPY public.workout_schedules ("ScheduleId", "Day", "Workout", "Time", "TrainingRoom", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    239   ��       �           0    0    access_levels_AccessLevelId_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."access_levels_AccessLevelId_seq"', 3, true);
          public          postgres    false    224            �           0    0    brands_BrandId_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."brands_BrandId_seq"', 3, true);
          public          postgres    false    226            �           0    0    card_tariffs_TariffId_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."card_tariffs_TariffId_seq"', 1, true);
          public          postgres    false    230            �           0    0    club_cards_NumberCard_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."club_cards_NumberCard_seq"', 1, true);
          public          postgres    false    228            �           0    0    employees_EmployeesId_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."employees_EmployeesId_seq"', 11, true);
          public          postgres    false    214            �           0    0    group_workouts_WorkoutId_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public."group_workouts_WorkoutId_seq"', 10, true);
          public          postgres    false    218            �           0    0 "   positions_employees_PositionId_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."positions_employees_PositionId_seq"', 3, true);
          public          postgres    false    232            �           0    0    products_ProductId_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."products_ProductId_seq"', 21, true);
          public          postgres    false    216            �           0    0    services_ServicesId_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."services_ServicesId_seq"', 2, true);
          public          postgres    false    220            �           0    0    suppliers_SupplierId_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."suppliers_SupplierId_seq"', 3, true);
          public          postgres    false    234            �           0    0    training_rooms_RoomId_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."training_rooms_RoomId_seq"', 5, true);
          public          postgres    false    222            �           0    0    users_UserId_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."users_UserId_seq"', 16, true);
          public          postgres    false    236            �           0    0     workout_schedules_ScheduleId_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."workout_schedules_ScheduleId_seq"', 32, true);
          public          postgres    false    238            �           2606    16810     access_levels access_levels_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.access_levels
    ADD CONSTRAINT access_levels_pkey PRIMARY KEY ("AccessLevelId");
 J   ALTER TABLE ONLY public.access_levels DROP CONSTRAINT access_levels_pkey;
       public            postgres    false    225            �           2606    16817    brands brands_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY ("BrandId");
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public            postgres    false    227            �           2606    16839    card_tariffs card_tariffs_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.card_tariffs
    ADD CONSTRAINT card_tariffs_pkey PRIMARY KEY ("TariffId");
 H   ALTER TABLE ONLY public.card_tariffs DROP CONSTRAINT card_tariffs_pkey;
       public            postgres    false    231            �           2606    16824    club_cards club_cards_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.club_cards
    ADD CONSTRAINT club_cards_pkey PRIMARY KEY ("NumberCard");
 D   ALTER TABLE ONLY public.club_cards DROP CONSTRAINT club_cards_pkey;
       public            postgres    false    229            �           2606    16766 '   employees employees_EmployeeAccount_key 
   CONSTRAINT     q   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT "employees_EmployeeAccount_key" UNIQUE ("EmployeeAccount");
 S   ALTER TABLE ONLY public.employees DROP CONSTRAINT "employees_EmployeeAccount_key";
       public            postgres    false    215            �           2606    16764    employees employees_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY ("EmployeesId");
 B   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_pkey;
       public            postgres    false    215            �           2606    16782 "   group_workouts group_workouts_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.group_workouts
    ADD CONSTRAINT group_workouts_pkey PRIMARY KEY ("WorkoutId");
 L   ALTER TABLE ONLY public.group_workouts DROP CONSTRAINT group_workouts_pkey;
       public            postgres    false    219            �           2606    16846 ,   positions_employees positions_employees_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.positions_employees
    ADD CONSTRAINT positions_employees_pkey PRIMARY KEY ("PositionId");
 V   ALTER TABLE ONLY public.positions_employees DROP CONSTRAINT positions_employees_pkey;
       public            postgres    false    233            �           2606    16775    products products_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("ProductId");
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    217            �           2606    16796    services services_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY ("ServicesId");
 @   ALTER TABLE ONLY public.services DROP CONSTRAINT services_pkey;
       public            postgres    false    221            �           2606    16853    suppliers suppliers_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT suppliers_pkey PRIMARY KEY ("SupplierId");
 B   ALTER TABLE ONLY public.suppliers DROP CONSTRAINT suppliers_pkey;
       public            postgres    false    235            �           2606    16803 "   training_rooms training_rooms_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.training_rooms
    ADD CONSTRAINT training_rooms_pkey PRIMARY KEY ("RoomId");
 L   ALTER TABLE ONLY public.training_rooms DROP CONSTRAINT training_rooms_pkey;
       public            postgres    false    223            �           2606    16888    users users_Login_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_Login_key" UNIQUE ("Login");
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_Login_key";
       public            postgres    false    237            �           2606    16886    users users_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("UserId");
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    237            �           2606    24586 (   workout_schedules workout_schedules_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.workout_schedules
    ADD CONSTRAINT workout_schedules_pkey PRIMARY KEY ("ScheduleId");
 R   ALTER TABLE ONLY public.workout_schedules DROP CONSTRAINT workout_schedules_pkey;
       public            postgres    false    239            �           2606    16889    users access    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT access FOREIGN KEY ("Level_security") REFERENCES public.access_levels("AccessLevelId") NOT VALID;
 6   ALTER TABLE ONLY public.users DROP CONSTRAINT access;
       public          postgres    false    225    3259    237            �           2606    32768    employees account    FK CONSTRAINT     �   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT account FOREIGN KEY ("EmployeeAccount") REFERENCES public.users("UserId") NOT VALID;
 ;   ALTER TABLE ONLY public.employees DROP CONSTRAINT account;
       public          postgres    false    215    3273    237            �           2606    32808    products brands    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT brands FOREIGN KEY ("BrandName") REFERENCES public.brands("BrandId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 9   ALTER TABLE ONLY public.products DROP CONSTRAINT brands;
       public          postgres    false    217    227    3261            �           2606    32773    users cards    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT cards FOREIGN KEY ("ClubCard") REFERENCES public.club_cards("NumberCard") NOT VALID;
 5   ALTER TABLE ONLY public.users DROP CONSTRAINT cards;
       public          postgres    false    229    3263    237            �           2606    32798    workout_schedules group    FK CONSTRAINT     �   ALTER TABLE ONLY public.workout_schedules
    ADD CONSTRAINT "group" FOREIGN KEY ("Workout") REFERENCES public.group_workouts("WorkoutId") NOT VALID;
 C   ALTER TABLE ONLY public.workout_schedules DROP CONSTRAINT "group";
       public          postgres    false    3253    239    219            �           2606    32788    services instructor    FK CONSTRAINT     �   ALTER TABLE ONLY public.services
    ADD CONSTRAINT instructor FOREIGN KEY ("Instructor") REFERENCES public.employees("EmployeesId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 =   ALTER TABLE ONLY public.services DROP CONSTRAINT instructor;
       public          postgres    false    3249    221    215            �           2606    32793    group_workouts instructors    FK CONSTRAINT     �   ALTER TABLE ONLY public.group_workouts
    ADD CONSTRAINT instructors FOREIGN KEY ("Instructor") REFERENCES public.employees("EmployeesId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 D   ALTER TABLE ONLY public.group_workouts DROP CONSTRAINT instructors;
       public          postgres    false    215    219    3249            �           2606    32783    employees position    FK CONSTRAINT     �   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT "position" FOREIGN KEY ("Position") REFERENCES public.positions_employees("PositionId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 >   ALTER TABLE ONLY public.employees DROP CONSTRAINT "position";
       public          postgres    false    215    3267    233            �           2606    32803    workout_schedules room    FK CONSTRAINT     �   ALTER TABLE ONLY public.workout_schedules
    ADD CONSTRAINT room FOREIGN KEY ("TrainingRoom") REFERENCES public.training_rooms("RoomId") NOT VALID;
 @   ALTER TABLE ONLY public.workout_schedules DROP CONSTRAINT room;
       public          postgres    false    3257    223    239            �           2606    32813    products suppliers    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT suppliers FOREIGN KEY ("Supplier") REFERENCES public.suppliers("SupplierId") NOT VALID;
 <   ALTER TABLE ONLY public.products DROP CONSTRAINT suppliers;
       public          postgres    false    3269    235    217            �           2606    32778    club_cards tariff    FK CONSTRAINT     �   ALTER TABLE ONLY public.club_cards
    ADD CONSTRAINT tariff FOREIGN KEY ("CardTariff") REFERENCES public.card_tariffs("TariffId") ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.club_cards DROP CONSTRAINT tariff;
       public          postgres    false    3265    231    229            p   X   x�3�v�4202�50"Cc+ 20�337�60�#�e��[��_������L���~��1�cJnf�
#=Csc���R\1z\\\ l*%�      r   ]   x�3�t�	�4202�50"C+Cs+S=CcKmc<R\F�A����A�n!da�阛�������Pf�`hfedjeb�gj`�b�W� K�'K      v   e   x�}��	�0�d
{1��(gq
Kgp���f��md�^���Xa�^��e�&N�2,)��p��!=���&��HY�� �����ץ7l����ҍ�Z?�4�      t   4   x�3�4�4202�50�501��)[�[����j������ �#.      f   |  x��V�N�@}^��S�&�]_��ҏ!IE���ZUJ���i��0�G=3$�	j��B��s;sff�
]��+�jh)*�N���h��}ZP��u˷��O?i�z�Os*�4��M_�}�u�h�W4�vE�*0A�6A�D���/4چ�>!�B��
7��TR)A��t�4r��}ΩT8S��-�>��Ӕ�nؒ�܀�#�Qej1�����n�,J�}�Cp�V`}� ���rֿ���� /�~{���;�w�R�x����VX�[9l�!|����k3�V6z��tw�f6�A'���!�FI.�+}�S�l�{�s�n(8�%��gOqM� y,$��ԡY,����yX�!�1�9����;0��$w'b��\!�K�k ��XL�8:�b�X&ڧU�?ԭ���0Y���6��.p�I��H�$�bm;�፟��_�����*{)�B�,���[}N��@l/ۀ��HX/Ż�����ޫt��Zu_9k}g�d����lH�w���`_\��v�l�!0��S�da�E�6�Z��"��,���Fp�ozc̗���}�6|(�FG\������5ea���fN��[�0s|���!q���<1��éU�'Y��y�u��<�v�pvN�q:L�fu��r�d��e���׬�.��jLT�t�$����bL.�,�\7�,��0��V�Նez�pSY�b�d��D�&lB�.��:Zt��F�;��i���z�.������S�ἓ���~�`�T�n�%��o.�GJ��'��.�<cd&�B��$ل�.�e���	s,�e"Wne��A��c��
�7�@�+�O��0-x�x�^C�mĳ�q�Ż�Y7��Sm�t���{�=��)U3�      j   
  x��VMoI=����E�����Xn����J\�Ȃ����!�(�v�"!>�+�mOlg�����W�3��!������ޫz�&�P��\�U"\qX}�����9��r��H�{N�E��z?;�wB�'�=~�/���^�*QS�����X%�9�su��\�RmH����J�ga_�����"��Pk�j�Z��~��,�P��%�N�>V}����$�o���$�,��T儗�&z"�?dx�ϵT�SBU�K{R}R+����HgD6��x�1���7Z����a��D�c��8��n��2UKJ��W�?����G���+"�.|d `����*F�)��	}�E��J���������_ϛM̱H�@zέ2%2[�!J�i3�N���?��O����8J��9��闘�65)�Dq~��6~B�S)��!����e�@x)w)�H���o��'T�/�<�yQ�1=���~�Y�-"�*w�JyǚN3��9W"����jI���+���6��'v�וn�߅���F�
���ٻ��P����>~�����	�ÐR���vp����y��HJ9�̸ϕA�����(��#�?&��$1T`OI����3H��sc2\��������^�`(B�c��#ْ���P%������IC��- ����5��*Q� �d�#�]�=���.j������NdG��5�FȊ�����a��Pt�]�4���,~;�n�J3d��zML
I���u�ш�l�?�d3��1��m80/.��q��� �����)%��',2�]sї�Ewѷ�0�#�}	�Z�����w(�D���SoZba�����%�>��%��H��'.J��|jD>���Hąg5�6E������*��*$l�~dw��ɳ�������u�נqR��e��ҷ �����j���D��}]�Nc�40��$�C̼ �+ŅI�0{P\v�n��v��۵~_���܊�mcL��s�R37ckfa�ưQ�����"������.��uǶ,�+)      x   w   x���1
�@���)�%�����Yr��7��Tus��7r����x�#t��cA��/m�Ơ�ZSac�-��rl⤒��e�8O�\L�	m������B�·�b�=��}�c��N�      h   �  x��W�n[E^�O1�Dd���_��R��PŒͽ�ABHE�N����P`Q!6�l'nǾy������3׎o�vC)�gΜ9?�wΙ��^�{n��7-�|G�����X�'�˓r�<r�r�����T�kW��8p�&n��X��&�]�fP:�:T�(��j���A�-�l��*ذA@#�pfHK���Kg��c\8�9���l_��Q�T�L�=X�	>��ꀬ�ed���ĸ�φ^�yy
��*ǞPȎr�� �pl���K`M�x! 3���@�o��������)���	� f*r�#?��/r��K5cx��;^�4�>小!s��S"ZӰ&�&yޑ6�g20a(��kdO�y�7Qg���W�7�2V*#U �i+�VQK��]e߰��y	��e@�[�����|����~�`�ާ;"R��xE�ƩzK�t#�Yݗadc��L��N�:�MlL7�N[at�ڶ�-[s��F3n�_`e���|D0e�°g0!2@�_�MJUup(�����O& P0�<��S���i\e���J0ng{Z�ڔ�#B���&o�ͨu��p/��=Ӗ1{u���g�K-^/23�*S��;����	޸�ZZ�<�������늙l�*��PQ������\s���'��\i���\v;r�u�̓�/M�bk�8�z�z�CT���6l�Q\���V3�E)��0dA�9�a�ENAu���(O����d���ݕ_G8~��Wk�!\LH�n����3�3��Rp«\#�'���������a���~�|�0l��0RIj���>�z2�tO�q�����$N7��Q B���q�o55��q�e��;'����#����2-䟦z�: ���1��:d?�w�Ҥ:��A�u����˷���KZ�9$�Կ(~Td��;!���fN9����mT��UE�;Z~	>=��$���~T�Um��~�~�4�^kJ�������W$&����R㺩
��-�<U#��7�
UU�`rO`�{T�9�;U��pR)-yG޾~��YN`27�>��@QOS-�,rJAf�êҭ����*��r:��=��G��$Uo��U�,	�b�(�A�Kd�Kr�K�0���$��I[G-�w�`m�����+L[�5l��z��aAӊ�-�Y�������H~@������)�/���<��$���b�A�ve�X���d�'I�O�~޹5�m;�ہia}��j��;�@]���[��7�n����;f4Q?	@����T���6���م��C;~}�/X�c���τ/���%������+jy�g�����������b��Z.Ⱥ��:�t/�\�
Y�%V�6L�x�֘X����Ud�O�y��,D�竳���q�a��W`Ұ�$�P!��γ��y5�Ϲ��cH~<Xg|��Vs���<%eDC��:�l��&�"0�WR!@��&��� ϵ�:]��o�Pc�T��Ac�1��iE��7��FW��o B+�xT��U��w�����#V��
���)���z�k����p�/�i�
�`\i�A��Y���&~N�#������O+Zݼ�7�c�CB�rI�V���5��Eƍ���T�S���e(���k³�>OJC��9���[Y52��?%[����ttڗ6�2�U.��ȸ���t�'w!"��B��;������l6�!-�+      l   \   x�Eɱ� F���7���,cl]��1�pl$Tv/�j{ۤH�S.)�k;�1r��*�H
���%�R&�H.-���4�A�8H�Nk�O� �      z   �   x�3�0�¾�v\l�0�¦.콰��&��@P��t��~ ޢ�id`d�k`D
��V��V&Fz&�f��x���8/LYpa3Ģ;�v^��,r�	V�H,�MLN--�LN�)&�&c����4x+ȖE`��^�ua���8s3�����S��S�fY(�Y��X���X�X�!����� ��r/      n   �   x���K
�0E��*2���^Y��i���#�QE�"�nvd��E��p.+�]���Hy����w�JH\CҐ7�F�(KK,r?��=����Hj�¡v�7�Z8官�8=�̆Cd�[���:G:�ow�5+1��\��9Gze��vOj      |   0  x�}��n"�����苾�؇ڻW��6G��8�9Tq0\�{4J�niґEQ��D��֚�y�v?C�FY��1VK���K��Z���%���y�ƿ[�H��=�y��������ϒ�g8��?��'��q�?H��e\�U"5���gJB�|=���Τפ���/�ٮ�3�duvZ��zr�bX�{�>����pQ'�kWu���,����jO�e�X-@ёݗ�9��$�!z�	�$��y��AUCQeL�W�~�*��d���h��.��pm7��z��E�dg�- w�M�f�y�:�Y�
�R';F���Y�r:J��N>�X�I��#��S��ɘ�a��W �m���o���7�M��7h�-�k�1LKױ=J0&4�j��Y^;�5́R[N,%zy=sp79�ţ��k�c�5���A"6��3�-(��cC��"�+�Pt��rp�T�����;�w����?ߏp�)�ۥ�V��ISg�w:�]8q�7���Y&�ZX|Ǻ��T>�D�"�M���g��v�Gx�,^�| �2�)b:W%k0�W��{:�yhź��Q�ϊ�W�Di2Gڞ؃�����-�
P�����]��I�m0>����F0x��hL�F�+�3�2M=�s���8Y:���i������A���TK)�'��DlU;/���ˌg&�TPrcc@��ƻ���膢Ȝ�#j�01�&lL�*�h���D����6��}���/���ip�R�5��bO)Q�0�b��*�A5�
T���s���il�;�:7�AW��jV�sX_���XnK�!���1��a:j v�q�?���7�o76���
G7����p�n�ݡ�7�|� ��xӥ��~������Y���XfiMZ��hT����)N��@�g��b\��>��
FmK�>�c|7���̠d���U�A�L���&�XDZ�4u;��?�x
�4�:��Hs���SU��Re����l[�i)�T��G�*���U��`\wN2>��\�c�A��Xm�B�R��a,n(�ɪ���� �@T���v㇠a��o��W0���1�M���Y���}+:�ў5��ħn�=Z���!�=�z��i�df{�tW/����nTc�̐p�z�i�*��H��`}/�]+Z��_NQ�0�Ԗ��k��h1��1~�tI3�Γ��մݻHYx�O�*�͞Uz���r�_�l�~\�X�)T"�>�&rSC0!������F��o��I�I����(`�ܵ߻�*b"/5��j��5�efk�������0���b�TsT��8]3���jјP�����f�d��r�]>�{HM�IPx �"+����Ƃ2W�=��5���`"?��S�vn���B�����iHj�#k촼��`<+.�5�W�żPΝ�D�Rey-=��'%+�:+_&�%ӻ�k�c�yM�g�M�BPp)V��Z H�e尃�r�ut3�T��� 5a�	*�W���YrF� ݃ԉ±�K#kjƳs>��f<1�z����|vj�ʝ�$����n'�N�����K^k��<����I���#岊I�5q���ȑH���Ns      ~   �  x���Kn�!����W���y���5I���E#E�b�?�a0'I��"��$�$�qBC
��H���}ȓ!�dԔ����,��辻&�m.�:�иl�C&G����<L��q(�Ӆ%��8�����8$`I�/����C�KV����v�G�C��ͶTO	�R�!���K �ޏ��B@f�{�b��g�by�����*W���m-{���=C.儬p�4�j�t�9�!���K ��H��l���5�,����:�#c����8�.���ߟ���[������_��X���z �b�y�+D����@f��r�{��Q��R������G�Q��R}�`l!��-`�@	į�1��L���+5��$��x�1�哫E�,(=��a�m6�-r�H�<'��(g(>���B-�����I��b���hw	� �BRW     