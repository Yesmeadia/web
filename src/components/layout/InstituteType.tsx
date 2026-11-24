import { institutions } from "@/utils/institutions";

const InstituteType = () => {
  return (
    <section className="institutions_types_container">
      <div className="institutions_types_wrapper">
        <h1 className="institutions_heading">
          Types of YES <br /> Institutions
        </h1>

        <ul className="institutions_list_grid">
          {institutions.map((institution, index) => (
            <li key={institution.title} className="institution_list_item">
              <span className="institution_index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="institution_name">{institution.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InstituteType;
