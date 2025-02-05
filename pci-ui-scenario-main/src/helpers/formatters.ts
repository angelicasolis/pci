export const formatDate = (dateString: string | null): string => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString("en-GB"); // DD/MM/YYYY
  };
  
  export const formatPotentiallyHazardous = (value: string | null): string => {
    if (value === "Y") return "Yes";
    if (value === "N") return "No";
    return "";
  };
  