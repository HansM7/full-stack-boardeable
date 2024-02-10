 <div className="w-72 flex flex-col rounded-md shadow-md p-4 bg-slate-100 gap-2">
        <header className="relative w-full ">
          <div className="flex justify-between">
            <h2 className="font-semibold">To do</h2>
            <span role="button" onClick={handleClickHeader}>
              <LogoOptionAtom></LogoOptionAtom>
            </span>
          </div>

          {openHeader ? (
            <ActionCardMolecule
              handleEdit={handleEditHeader}
              handleDelete={handleDeleteHeader}
            ></ActionCardMolecule>
          ) : (
            ""
          )}
        </header>

        {/* elementos a contener */}
        <div className="flex flex-col gap-2">
          <div className=" relative px-1 py-2 rounded-md shadow-md bg-white">
            <div className="flex justify-between">
              <h3>first card</h3>
              <span role="button" onClick={handleClickCard}>
                <LogoOptionAtom></LogoOptionAtom>
              </span>
            </div>

            {openCard ? (
              <ActionCardMolecule
                handleEdit={handleEditHeader}
                handleDelete={handleDeleteHeader}
              ></ActionCardMolecule>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* seccion add card */}
        <div>
          {openCreate ? (
            <div className="flex flex-col gap-2 p-2 rounded-md shadow-md bg-white">
              <h3 className="font-semibold">Card title</h3>
              <input
                className="px-3 py-2 outline-none border rounded-md"
                type="text"
              />
              <div className="flex flex-row gap-2">
                <button className="bg-violet-700 text-white px-3 py-2 rounded-md w-fit">
                  Add card
                </button>
                <button
                  onClick={() => setOpenCreate(!openCreate)}
                  className="bg-gray-200 text-black  px-3 py-2 rounded-md w-fit"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <span
              onClick={() => setOpenCreate(!openCreate)}
              role="button"
              className="text-gray-700 font-semibold"
            >
              + Add card
            </span>
          )}
        </div>
      </div>
