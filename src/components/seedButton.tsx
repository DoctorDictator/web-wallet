type SeedButtonProps = {
  children: React.ReactNode;
};

export default function SeedButton({ children }: SeedButtonProps) {
  return (
    <button className="text-sm m-3 border-white bg-white text-black border p-3 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-md font-medium">
      {children}
    </button>
  );
}
