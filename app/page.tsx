'use client';

import { Button } from '@/components/ui/button';
import { Armchair, UsersRound } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Lights } from '@/components/Lights';
import { Link as Scroll } from 'react-scroll/modules';

import * as React from 'react';
import GuestCard from '@/components/GuestCard';

export default function Hero() {
  return (
    <>
      <header className="absolute top-0 h-[80px] bg-transparent"></header>
      <section className="flex h-dvh w-screen items-center justify-center bg-gradient-to-b">
        <div className="relative h-full w-full px-4 bg-grid-white/[0.03]">
          <div className="relative z-[1] flex h-full w-full animate-moveUp flex-col items-start justify-center sm:items-center">
            <div className="max-w-2xl text-center">
              <div className="flex justify-center">
                <Image
                  alt="Logo"
                  className="object-cover text-center"
                  src="/logo.webp"
                  width={125}
                  height={125}
                />
              </div>
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-7xl">
                  Experience Ideas
                  <br /> Worth Spreading
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="font-mont text-lg text-muted-foreground">
                  Join us for an empowering event that bridges the gap between
                  aspiring students and accomplished achievers. Hear inspiring
                  stories, gain valuable insights, and fuel your journey to
                  success.
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Link href="/form">
                  <Button size="lg" variant="ringHover" className="text-white">
                    <Armchair size={30} strokeWidth={2} className="mr-2" />
                    Count me In
                  </Button>
                </Link>
                <Scroll to="guests" smooth={true} duration={1000}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="p-5 text-white"
                  >
                    <UsersRound
                      size={30}
                      strokeWidth={2}
                      className="mr-2 p-0.5"
                    />
                    See our Guests
                  </Button>
                </Scroll>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-0 h-full w-full animate-appear opacity-0">
            <Lights />
          </div>
        </div>
      </section>

      <section
        id="guests"
        className="flex min-h-dvh w-screen items-center justify-center bg-gradient-to-b"
      >
        <div className="relative h-full w-full bg-grid-white/[0.03]">
          <p className="pt-10 text-center text-6xl font-bold">Our Guests</p>
          <div id="cards" className="grid lg:grid-cols-2 xl:grid-cols-3 px-4">
            <GuestCard
              name="CrazyDeep"
              designation="Youtuber"
              description="YouTube Channel"
              imageSrc="/Crazydeep.webp"
            />
            <GuestCard
              name="Samrat Bhai"
              designation="Youtuber"
              description="YouTube channel"
              imageSrc="/Samrat.webp"
            />
            <GuestCard
              name="Vishwa Mohan Singh"
              designation="Youtuber"
              description="YouTube channel"
              imageSrc="/Vishwa.webp"
            />
            <GuestCard
              name="Jayesh Ranjan"
              designation="Youtuber"
              description="YouTube channel"
              imageSrc="/Jayesh.webp"
            />
            <GuestCard
              name="Prabal Bhatt"
              designation="Youtuber"
              description="YouTube channel"
              imageSrc="/Prabal.webp"
            />
          </div>
        </div>
      </section>
      <footer className="mt-[120px] h-16">
        <div className="flex items-center justify-around">
          <Image
            alt="Adbrotisers"
            src="/adbrotisers.webp"
            width={200}
            height={50}
          />
          <div className="">
            <p className="font-bold tracking-wide">
              Saransh Tiwari: 7869770020
            </p>
            <p className="font-bold tracking-wider">
              Shreyansh Saxena: 9479966175
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
